import React from 'react';
import './CartPage.css';
import CheckoutForm from './CheckoutForm';

const CartPage = ({ cart, handleRemoveFromCart, handleCheckout }) => {
  const [showCheckoutForm, setShowCheckoutForm] = React.useState(false);

  const handleProceedToCheckout = () => {
    setShowCheckoutForm(true);
  };

  const isValidNumber = (value) => typeof value === 'number' && !isNaN(value);

  const subtotal = cart.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price);
    return acc + (isValidNumber(itemPrice) ? itemPrice : 0) * item.quantity;
  }, 0);

  const taxes = subtotal * 0.06;
  const shipping = 5;
  const orderTotal = subtotal + shipping + taxes;

  return (
    <div className="cart-container">
      <h2>Cart</h2>

      {cart.length > 0 ? (
        <div>
          <ul className="cart-list">
            {cart.map((product) => {
              const productName = `${product.productname} - ${product.selectedWeight} - ₹${product.price}`;
              return (
                <li className="cart-list-item" key={`${product.id}-${product.selectedWeight}`}>
                  <div className="cart-item-info">
                    {product.productImage && (
                      <img src={product.productImage} alt={product.productname} className="cart-item-image" />
                    )}
                    <span className="cart-item-name">{productName}  x {product.quantity}</span> {/* Show quantity */}
                  </div>

                  <button
                    className="remove-button"
                    onClick={() => handleRemoveFromCart(product.id, product.selectedWeight)}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="order-details">
            <h3>Order Details</h3>
            <p className="order-details-item">Total Items: {cart.length}</p>
            <p className="order-details-item">Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p className="order-details-item">Shipping: ₹{shipping.toFixed(2)}</p>
            <p className="order-details-item">Taxes: ₹{taxes.toFixed(2)}</p>
            <h2 className="order-total">Order Total: ₹{orderTotal.toFixed(2)}</h2>
          </div>

          {!showCheckoutForm ? (
            <div className="checkout-button-container">
              <button className="checkout-button" onClick={handleProceedToCheckout}>
                Proceed to Checkout
              </button>
            </div>
          ) : (
            <CheckoutForm onCheckout={handleCheckout} />
          )}
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;