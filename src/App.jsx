import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ProductList from './components/ProductList';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Provider>
  );
}

export default App;
