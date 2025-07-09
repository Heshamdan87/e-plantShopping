/**
 * Shopping Cart Component - Where Plant Dreams Become Reality! 🛒🌱
 * 
 * This component handles the shopping cart experience with love and care.
 * Every plant lover deserves a smooth, enjoyable shopping experience!
 * 
 * Created by Hesham Dan with passion for plants and great user experience
 * 
 * @author Hesham Dan
 * @version 1.0.0
 */

import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

/**
 * CartItem Component - Your Personal Plant Shopping Assistant
 * 
 * This component makes managing your plant collection as easy as watering them!
 * Add more, remove some, or continue shopping - we've got you covered.
 * 
 * @param {Function} onContinueShopping - Continue your plant hunting adventure
 */
const CartItem = ({ onContinueShopping }) => {
  // Connect to our Redux store - the brain of our shopping experience
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  /**
   * Calculate the total investment in your green paradise
   * Every penny spent on plants is an investment in happiness! 🌿💚
   */
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const itemCost = parseFloat(item.cost.substring(1));
      return total + (itemCost * item.quantity);
    }, 0).toFixed(2);
  };

  /**
   * Calculate cost for individual plant - because every plant matters!
   */
  const calculateTotalCost = (item) => {
    const itemCost = parseFloat(item.cost.substring(1));
    return (itemCost * item.quantity).toFixed(2);
  };

  /**
   * Continue the plant shopping adventure!
   * There's always room for one more plant, right? 😊
   */
  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  /**
   * Add more of your favorite plants!
   * Because who can resist doubling up on beauty? 🌺
   */
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ 
      name: item.name, 
      quantity: item.quantity + 1 
    }));
  };

  /**
   * Maybe one less plant (but who are we kidding?) 😄
   * We'll make it easy to adjust quantities, but we know you'll want more!
   */
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ 
        name: item.name, 
        quantity: item.quantity - 1 
      }));
    } else {
      // If quantity becomes 0, we sadly have to say goodbye to this plant
      dispatch(removeItem(item.name));
    }
  };

  /**
   * Sometimes we have to make tough choices...
   * But don't worry, the plant will find another loving home! 🏡
   */
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  /**
   * The moment of truth - checkout time! 🎉
   * (Coming soon - we're working on making plant buying even easier!)
   */
  const handleCheckoutShopping = () => {
    alert('🌱 Thank you for choosing Paradise Nursery! 🌱\n\nYour plant paradise is being prepared with love.\nCheckout functionality coming soon - we\'re making it as beautiful as our plants!');
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>
        🌱 Your Plant Paradise Total: ${calculateTotalAmount()} 🌱
      </h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img 
              className="cart-item-image" 
              src={item.image} 
              alt={`Beautiful ${item.name} - perfect for your home`}
            />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button 
                  className="cart-item-button cart-item-button-dec" 
                  onClick={() => handleDecrement(item)}
                  title="Reduce quantity (we understand, sometimes less is more)"
                >
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button 
                  className="cart-item-button cart-item-button-inc" 
                  onClick={() => handleIncrement(item)}
                  title="Add more! (Great choice, this plant is amazing)"
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button 
                className="cart-item-delete" 
                onClick={() => handleRemove(item)}
                title="Remove from cart (we'll miss this plant, but we understand)"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button 
          className="get-started-button" 
          onClick={(e) => handleContinueShopping(e)}
          title="Continue exploring our plant paradise!"
        >
          🌿 Continue Shopping
        </button>
        <br />
        <button 
          className="get-started-button1" 
          onClick={(e) => handleCheckoutShopping(e)}
          title="Complete your plant adoption process!"
        >
          🛒 Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;


