// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>${product.price} x {product.quantity} = ${(product.price * product.quantity).toFixed(2)}</p>
              <div>
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => increaseQuantity(product.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
