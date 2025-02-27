import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './React Project/HomePage';
import LoginPage from './LoginPage';
import CategoriesSlider from './COMPOUNTS/Product/CategoriesSlider';
import AllProduct from './COMPOUNTS/Product/AllProduct';
import CartPage from './CartPage';
import Navbar from './Navbar/Navbar';
import Footer2 from './Footer/Footer2';
import CheckoutForm from './CheckoutForm';
import OrderConfirmation from './OrderConfirmation';
import ContactPage from './ContactPage'; // Import ContactPage

import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [orderConfirmation, setOrderConfirmation] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleAddToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id && item.selectedWeight === product.selectedWeight);

    if (existingProductIndex !== -1) {
      // Product already exists, update quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Product doesn't exist, add it to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId, selectedWeight) => {
    setCart(cart.filter(item => !(item.id === productId && item.selectedWeight === selectedWeight)));
  };

  const handleCheckout = (orderDetails) => {
    const order = { ...orderDetails, cart };

    setOrderConfirmation(order);
    setCart([]);
    return order;
  };

  const updateLoginStatus = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} cartquantity={cart.length} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage updateLoginStatus={updateLoginStatus} />} />
        <Route path="/categories" element={<CategoriesSlider />} />
        <Route path="/allproducts" element={<AllProduct handleAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={<CartPage cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleCheckout={handleCheckout} />}
        />
        <Route path="/checkout" element={<CheckoutForm onCheckout={handleCheckout} />} />
        <Route path="/my-orders" element={<OrderConfirmation orderConfirmation={orderConfirmation} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer2 />
    </BrowserRouter>
  );
};

export default App;