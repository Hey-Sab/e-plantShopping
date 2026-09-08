import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './App.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const parseCost = (costString) => {
    if (typeof costString === 'number') return costString;
    return parseFloat(costString.replace(/[^0-9.-]+/g, "")) || 0;
  };

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      total += parseCost(item.cost) * item.quantity;
    });
    return total;
  };

  const calculateTotalCost = (item) => {
    return parseCost(item.cost) * item.quantity;
  };

  const handleContinueShopping = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckoutShopping = () => {
    alert('Coming Soon');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header-title">Shopping Cart</h2>
      
      <div className="total-cart-amount">
        Total Cart Amount: ${calculateTotalAmount()}
      </div>

      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', margin: '2rem 0', color: '#6b7280' }}>
          <p style={{ fontSize: '1.2rem' }}>Your shopping cart is currently empty.</p>
        </div>
      ) : (
        <div className="cart-items-list">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-unit-price">Unit Price: {item.cost}</div>
                <div className="cart-item-total-cost">
                  Subtotal: ${calculateTotalCost(item)}
                </div>
              </div>

              <div className="cart-item-actions">
                <button 
                  className="quantity-btn" 
                  onClick={() => handleDecrement(item)}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => handleIncrement(item)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
                <button 
                  className="delete-btn" 
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-footer-buttons">
        <button className="continue-shopping-btn" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-btn" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
