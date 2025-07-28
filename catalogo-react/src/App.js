import React from 'react';
import ProductList from './components/ProductList';
import { products } from './data/products';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="header-container">
          <h1 className="app-title">Mi Catálogo</h1>
          <p className="app-subtitle">Los mejores productos al mejor precio</p>
        </div>
      </header>
      
      <main>
        <ProductList productos={products} />
      </main>
      
      <footer className="app-footer">
        <div className="footer-container">
          <p>&copy; 2025 Mi Catálogo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
