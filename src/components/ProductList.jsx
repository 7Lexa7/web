import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products, cart, toggleCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} cart={cart} toggleCart={toggleCart} />
      ))}
    </div>
  );
};

export default ProductList;
