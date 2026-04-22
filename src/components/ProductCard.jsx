import { useState } from 'react';

function ProductCard({ product, addToCart }) {
	const [quantity, setQuantity] = useState(1);

	const handleIncrement = () => setQuantity(prev => prev + 1);
	const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev -1 : 1));

	return(
		<div className="product-card">
			<img src={product.image} alt={product.title} />
			<h3>{product.title}</h3>
			<p className="price">${product.price.toFixed(2)}</p>

			<div className="quantity-controls">
				<button onClick={handleDecrement}>-</button>
				<input
					type="number"
					value={quantity}
					min="1"
					onChange={(e) => {
						const val = parseInt(e.target.value);
						setQuantity(val < 1 || isNaN(val) ? 1 : val);
					}}
				/>
				<button onClick={handleIncrement}>+</button>
			</div>
			<button
				className="add-btn"
				onClick={() => addToCart(product, quantity)}
			>
				Add to Cart
			</button>
		</div>
	);
}
export default ProductCard;