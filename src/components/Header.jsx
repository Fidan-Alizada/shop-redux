import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const favoriteCount = useSelector((state) => state.products.products.filter(p => p.isFavorite).length);
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="bg-fuchsia-600 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl">
        Product App
      </Link>
      <nav className="flex items-center">
        <Link to="/favorites" className="relative mr-4 flex items-center">
          <FavoriteIcon />
          {favoriteCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {favoriteCount}
            </span>
          )}
        </Link>
        <Link to="/cart" className="relative flex items-center">
          <ShoppingCartIcon />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
