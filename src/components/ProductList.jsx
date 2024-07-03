import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../features/products/productsSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-fuchsia-600">Produc List</h2>
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img src={product.img} alt={product.name} className="w-40 h-50 object-cover mx-auto" />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-fuchsia-600 text-center">{product.name}</h2>
            <p className="text-gray-700 mb-4 text-center">${product.price.toFixed(2)}</p>
            <div className="flex justify-center">
              <button
                className={`p-2 rounded-full transition-colors duration-300 ${product.isFavorite ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                onClick={() => dispatch(toggleFavorite(product.id))}
              >
                <FavoriteIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>

  );
};

export default ProductList;
