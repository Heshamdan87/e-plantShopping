import { createSlice } from '@reduxjs/toolkit';

/**
 * Redux slice for managing shopping cart state
 * Handles adding, removing, and updating cart items
 */
export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to store cart items
  },
  reducers: {
    /**
     * Add a new item to the cart or increment existing item quantity
     * @param {Object} state - Current cart state
     * @param {Object} action - Action containing item data (name, image, cost)
     */
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      
      if (existingItem) {
        // If item already exists, increment quantity
        existingItem.quantity++;
      } else {
        // If new item, add to cart with quantity 1
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    /**
     * Remove an item completely from the cart
     * @param {Object} state - Current cart state
     * @param {Object} action - Action containing item name to remove
     */
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    /**
     * Update the quantity of an existing item in the cart
     * @param {Object} state - Current cart state
     * @param {Object} action - Action containing item name and new quantity
     */
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for store configuration
export default CartSlice.reducer;
