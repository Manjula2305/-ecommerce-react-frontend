// OrderConfirmation.js
import React from 'react';
import './OrderConfirmation.css';

const OrderConfirmation = ({ orderConfirmation }) => {
    if (!orderConfirmation) {
        return <p>No orders have been placed yet.</p>;
    }

    return (
        <div className="order-confirmation">
            <h2>Order Confirmed!</h2>
            <p><strong>Name:</strong> {orderConfirmation.name}</p>
            <p><strong>Address:</strong> {orderConfirmation.address}</p>
            <p><strong>Phone:</strong> {orderConfirmation.phone}</p>
            <p><strong>Email:</strong> {orderConfirmation.email}</p>
            <p><strong>Zip Code:</strong> {orderConfirmation.zipCode}</p>

            <h3>Order Items</h3>
            <ul>
                {orderConfirmation.cart.map((item, index) => (
                    <li key={index}>
                        {item.productname} - {item.selectedWeight} (Qty: {item.quantity}) - ₹{(item.price * item.quantity).toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderConfirmation;