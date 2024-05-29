import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const toggleCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = (username, password) => {
    setShowRegister(false);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return showRegister ? (
      <Register onRegister={handleRegister} />
    ) : (
      <Login onLogin={handleLogin} onToggleRegister={() => setShowRegister(true)} />
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList products={products} cart={cart} toggleCart={toggleCart} />} />
        <Route path="/cart" element={<Cart cart={cart} toggleCart={toggleCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
