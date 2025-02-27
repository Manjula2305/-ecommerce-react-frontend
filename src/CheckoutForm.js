// CheckoutForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutForm.css';

const CheckoutForm = ({ onCheckout }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        zipCode: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (typeof onCheckout !== 'function') {
            console.error("Error: onCheckout is not a function!");
            return;
        }

        onCheckout(formData);
        navigate('/my-orders');
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />

                <label>Phone:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" placeholder="Enter 10-digit number" />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Zip Code:</label>
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required pattern="[0-9]{6}" placeholder="Enter 6-digit zip code" />

                <button type="submit" className="checkout-button">Confirm Order</button>
            </form>
        </div>
    );
};

export default CheckoutForm;