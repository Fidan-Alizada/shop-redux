import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-fuchsia-600">Your Cart</h2>
      {items.map((item) => (
        <div key={item.id} className="border p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={item.img} alt={item.name} className="w-24 h-24 object-cover" />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-700">${item.price.toFixed(2)}</p>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
                  className="border p-1 w-16 text-center"
                />
                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-500 text-white"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <p className="text-xl font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <div className="border-t mt-4 pt-4 flex justify-between items-center">
        <h3 className="text-xl font-semibold">Total: ${getTotal()}</h3>
        <button className="bg-green-500 text-white p-2 rounded">Order</button>
      </div>
    </div>
  );
};

export default Cart;
