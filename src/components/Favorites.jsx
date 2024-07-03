import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const Favorites = () => {
  const favorites = useSelector((state) => state.products.products.filter(p => p.isFavorite));
  const dispatch = useDispatch();

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-fuchsia-600">Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {favorites.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
              <img src={product.img} alt={product.name} className="w-40 h-50 object-cover mx-auto" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-fuchsia-600 mb-2 text-center">{product.name}</h3>
                <p className="text-gray-700 mb-4 text-center">${product.price.toFixed(2)}</p>
                <div className="flex justify-center">
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="bg-fuchsia-600 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-fuchsia-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
