import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Quality Products, <br /> Delivered To Your Door.</h1>
          <p>Experience the best deals on electronics, jewelry, and fashion. All in one place.</p>
          <Link to="/shop" className="shop-now-btn">Shop Collection</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <span>🚚</span>
          <h3>Free Shipping</h3>
          <p>On all orders over $50</p>
        </div>
        <div className="feature-card">
          <span>🛡️</span>
          <h3>Secure Payment</h3>
          <p>100% protected checkout</p>
        </div>
        <div className="feature-card">
          <span>⭐</span>
          <h3>Top Rated</h3>
          <p>Quality guaranteed</p>
        </div>
      </section>
    </div>
  );
};

export default Home;