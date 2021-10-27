import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ProductList from './components/ProductList.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ProductSearch from './components/ProductSearch';
import ProductCart from './components/ProductCart';
import Container from 'react-bootstrap/Container'

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <main >
          <ProductSearch />
          <ProductCart />
          <ProductList />
        </main>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
