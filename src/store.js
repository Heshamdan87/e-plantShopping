/**
 * Redux Store Configuration
 * 
 * This file sets up the global Redux store for the Paradise Nursery Shopping Application.
 * The store manages all application state including the shopping cart items.
 */

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

/**
 * Create and configure the Redux store
 * 
 * The store is configured with:
 * - cart: Manages shopping cart state (items, quantities, etc.)
 * - Additional reducers can be added here as the application grows
 */
const store = configureStore({
    reducer: {
        cart: cartReducer, // Shopping cart state management
    },
});

// Export the store for use with the Provider component
export default store;
