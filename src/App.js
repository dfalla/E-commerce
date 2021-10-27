import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ProductList from './components/ProductList.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ProductSearch from './components/ProductSearch';
import ProductCart from './components/ProductCart';

const App = () => {
  return (
    <React.Fragment>

      <Header />
      <main>
        <ProductSearch />
        <ProductCart />
        <ProductList />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
