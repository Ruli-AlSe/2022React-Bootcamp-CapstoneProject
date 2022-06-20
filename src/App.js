import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList/ProductList";
import { Routes, Route } from "react-router-dom";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import { useCategories } from "./utils/hooks/useCategories";
import { useFeaturedProducts } from "./utils/hooks/useFeaturedProducts";
import "./App.css";
import { useState } from "react";

function App() {
  const { dataBanners, isLoadingBanners } = useFeaturedBanners();
  const { dataCategories, isLoadingCategories } = useCategories();
  const { dataProducts, isLoadingProducts } = useFeaturedProducts();

  useState(() => {}, [dataBanners, dataCategories, dataProducts]);

  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoadingBanners={isLoadingBanners}
              dataBanners={dataBanners}
              isLoadingCategories={isLoadingCategories}
              dataCategories={dataCategories}
              isLoadingProducts={isLoadingProducts}
              dataProducts={dataProducts}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              isLoadingBanners={isLoadingBanners}
              dataBanners={dataBanners}
              isLoadingCategories={isLoadingCategories}
              dataCategories={dataCategories}
              isLoadingProducts={isLoadingProducts}
              dataProducts={dataProducts}
            />
          }
        />
        <Route
          path="/products"
          element={<ProductList isLoadingBanners={isLoadingBanners} />}
        />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
