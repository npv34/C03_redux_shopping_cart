import React from 'react';

import './App.css';
import ProductList from "./Components/Products/ProductList";
import PrimarySearchAppBar from "./Components/Header";

function App() {
  return (
    <div className="App">
        <PrimarySearchAppBar/>
        <ProductList/>
    </div>
  );
}

export default App;
