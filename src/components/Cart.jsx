import React from 'react';
import './Cart.css';

const Cart = ({ cart, toggleCart }) => {

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
<>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                {item.title} - ${item.price}
                <button onClick={() => toggleCart(item)} className="remove-button">
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="total-price">
            Total Price: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
