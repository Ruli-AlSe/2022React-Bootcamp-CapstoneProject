import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList/ProductList";
import { Routes, Route } from "react-router-dom";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import { useCategories } from "./utils/hooks/useCategories";
import "./App.css";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  const { dataCategories, isLoadingCategories } = useCategories();
  console.log("*** app: ", dataCategories);

  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoading={isLoading}
              data={data}
              isLoadingCategories={isLoadingCategories}
              dataCategories={dataCategories}
            />
          }
        />
        <Route path="/home" element={<Home />} isLoading={isLoading} />
        <Route
          path="/products"
          element={<ProductList />}
          isLoading={isLoading}
        />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
