import PropTypes from 'prop-types';
import { useState } from 'react';

function ProductCard({ name, price, imageUrl={}, handleAddToCart, handleRemoveFromCart }) {
  const [addedToCart, setAddedToCart] = useState(false);
  
  const addToCart = () => {
    setAddedToCart(true);
    handleAddToCart({ name, price, imageUrl }); // Call the parent function to add to cart
  };

  const removeFromCart = () => {
    setAddedToCart(false);
    handleRemoveFromCart({ name, price, imageUrl }); // Call the parent function to remove from cart
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* Product image */}
        <img className="card-img-top" src={imageUrl} alt="Product" />
        <div className="card-body p-4">
          <div className="text-center">
            {/* Product name */}
            <h5 className="fw-bolder">{name}</h5>
            {/* Product price */}
            <span>${price}</span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {/* Conditional rendering based on whether the product is added to the cart */}
            {addedToCart ? (
              <button className="btn btn-outline-dark mt-auto" onClick={removeFromCart}>
                Remove from Cart
              </button>
            ) : (
              <button className="btn btn-outline-dark mt-auto" onClick={addToCart}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};

export default ProductCard;
