import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  const fetchProducts = () => {
    setLoading(true);
    setError(null);
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div className="page"><h2>Loading...</h2></div>;

  if (error) {
    return (
      <div className="page" style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Oops! Something went wrong.</h2>
        <p>{error}</p>
        <button onClick={fetchProducts} className="add-btn">Try Again</button>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Our Collection</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;