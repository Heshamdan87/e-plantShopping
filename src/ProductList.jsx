import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';
import { PLANTS_DATA } from './constants/plantData';

/**
 * ProductList Component - Displays plant catalog and manages shopping cart
 * @param {Function} onHomeClick - Callback function to navigate to home page
 */
function ProductList({ onHomeClick }) {
    // Component state management
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    
    // Redux hooks for state management
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    
    /**
     * Calculate total quantity of items in the shopping cart
     * @returns {number} Total quantity of all items in cart
     */
    const getTotalCartQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    /**
     * Check if a plant is already in the cart
     * @param {string} plantName - Name of the plant to check
     * @returns {boolean} True if plant is in cart, false otherwise
     */
    const isItemInCart = (plantName) => {
        return cart.some(item => item.name === plantName) || addedToCart[plantName];
    };

    // Styling for the navigation bar
    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    /**
     * Handle adding a plant to the shopping cart
     * @param {Object} plant - Plant object containing name, image, cost, etc.
     */
    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart(prevState => ({
            ...prevState,
            [plant.name]: true
        }));
    };

    /**
     * Handle navigation to home page
     */
    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    /**
     * Handle showing the shopping cart
     */
    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    /**
     * Handle showing the plants catalog
     */
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    /**
     * Handle continuing shopping from cart
     */
    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Plants</a></div>
                    <div> 
                        <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                            <h1 className='cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
                                </svg>
                                <span className='cart_quantity_count'>{getTotalCartQuantity()}</span>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {PLANTS_DATA.map((category, index) => (
                        <div key={index}>
                            <h1><div>{category.category}</div></h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <div className="product-title">{plant.name}</div>
                                        <div className="product-description">{plant.description}</div>
                                        <div className="product-price">{plant.cost}</div>
                                        <button 
                                            className={`product-button ${isItemInCart(plant.name) ? 'disabled' : ''}`} 
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={isItemInCart(plant.name)}
                                        >
                                            {isItemInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    
                    {/* Contact Footer Section */}
                    <div className="contact-footer">
                        <h3>🌱 Get in Touch with Paradise Nursery</h3>
                        <div className="footer-contact-info">
                            <div className="footer-contact-item">
                                <span>👤 Hesham Dan</span>
                            </div>
                            <div className="footer-contact-item">
                                <span>📧 Heshamdan2014@gmail.com</span>
                            </div>
                            <div className="footer-contact-item">
                                <span>📱 +49 15773127109</span>
                            </div>
                            <div className="footer-contact-item">
                                <span>📍 Kassel, Germany</span>
                            </div>
                        </div>
                        <p className="footer-message">
                            Questions about our plants? Need gardening advice? We&apos;re here to help you grow your green paradise! 🌿
                        </p>
                    </div>
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
