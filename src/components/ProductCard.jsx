import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, cart, toggleCart }) => {

  const isInCart = cart.some(item => item.id === product.id);

  return (
    <div className="product-card">
      <div className='product-img'><img src={product.image} alt={product.title} className="product-image" /></div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button 
        className={isInCart ? 'in-cart' : 'add-to-cart'} 
        onClick={() => toggleCart(product)}
      >
        {isInCart ? 'Remove' : 'Add'}
      </button>
    </div>
  );
};

export default ProductCard;
