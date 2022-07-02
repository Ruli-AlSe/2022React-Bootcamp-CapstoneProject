import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  //<Route path="/products/:category"
  //element={<ProductList categorySlug={query.get("category")} />}/>

  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
