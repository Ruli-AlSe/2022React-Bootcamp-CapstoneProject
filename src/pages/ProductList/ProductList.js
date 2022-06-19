import { useState, useEffect } from "react";
import SidebarComponent from "../../components/Sidebar/SidebarComponent";
import ProductGridComponent from "../../components/ProductGrid/ProductGridComponent";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import PaginationComponent from "../../components/Pagination/PaginationComponent";
import * as Styles from "./product-list-styles";
const productCategories = require("../../mocks/en-us/product-categories.json");
const products = require("../../mocks/en-us/products.json");

export default function ProductList() {
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let results = products.results;
  if (filters.length > 0) {
    results = products.results.filter((product) =>
      filters.includes(product.data.category.id)
    );
  }

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Styles.ProductListPage>
      <h1>Product List Page</h1>
      {isLoading && <LoadingComponent />}
      {!isLoading && (
        <Styles.ContentContainer>
          <Styles.Sidebar>
            <SidebarComponent
              categories={productCategories.results}
              setFilters={setFilters}
            />
          </Styles.Sidebar>
          <Styles.Products>
            <ProductGridComponent className="products" products={results} />
            <PaginationComponent />
          </Styles.Products>
        </Styles.ContentContainer>
      )}
    </Styles.ProductListPage>
  );
}
