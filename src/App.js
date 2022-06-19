import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList/ProductList";
import { Routes, Route } from "react-router-dom";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
