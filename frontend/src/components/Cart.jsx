import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 20, quantity: 1, image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Item 2', price: 30, quantity: 2, image: 'https://via.placeholder.com/100' },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/payment'); // Navigate to the PaymentPage
  };

  const styles = {
    cartContainer: {
      padding: '20px',
      maxWidth: '800px',
      margin: 'auto',
    },
    cartList: {
      listStyleType: 'none',
      padding: 0,
    },
    cartItem: {
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #ddd',
      padding: '10px 0',
    },
    cartItemImage: {
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      marginRight: '15px',
    },
    cartItemDetails: {
      flex: 1,
    },
    cartItemName: {
      display: 'block',
      fontWeight: 'bold',
    },
    cartItemPrice: {
      display: 'block',
      margin: '5px 0',
    },
    cartItemQuantity: {
      width: '60px',
      marginRight: '10px',
    },
    cartItemRemove: {
      background: '#f44336',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      cursor: 'pointer',
    },
    emptyCart: {
      textAlign: 'center',
      fontSize: '18px',
      color: '#888',
    },
    cartTotal: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginTop: '20px',
    },
    checkoutButton: {
      background: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.cartContainer}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p style={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        <ul style={styles.cartList}>
          {cartItems.map(item => (
            <li key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.cartItemImage} />
              <div style={styles.cartItemDetails}>
                <span style={styles.cartItemName}>{item.name}</span>
                <span style={styles.cartItemPrice}>${item.price.toFixed(2)}</span>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  min="1"
                  style={styles.cartItemQuantity}
                />
                <button onClick={() => handleRemoveItem(item.id)} style={styles.cartItemRemove}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h2 style={styles.cartTotal}>Total: ${calculateTotal()}</h2>
      <button onClick={handleCheckout} style={styles.checkoutButton}>Checkout</button>
    </div>
  );
};

export default Cart;
