import { Link } from 'react-router-dom';

const Cart = ({ cart, updateQuantity }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="page" style={{textAlign :' center', marginTop: ' 50px'}}>
        <h2>Your cart is empty.</h2>
        <p>Go to the shop to add some cool stuff!</p>
        <Link to="/shop" className="shop-now-btn" style={{ display: ' inline-block', margin: ' 20px', textDecoration: 'none'}}>Shop Now</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-container">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>${item.price.toFixed(2)} each</p>
              
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button className="remove-btn" onClick={() => updateQuantity(item.id, 0)}>
              Remove
            </button>
          </div>
        ))}
        <div className="cart-summary">
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;