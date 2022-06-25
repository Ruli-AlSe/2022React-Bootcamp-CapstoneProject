import { useState, useEffect } from "react";
import SidebarComponent from "../../components/Sidebar/SidebarComponent";
import ProductGridComponent from "../../components/ProductGrid/ProductGridComponent";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import PaginationComponent from "../../components/Pagination/PaginationComponent";
import * as Styles from "./product-list-styles";
import { useCategories } from "../../utils/hooks/useCategories";
import { useProducts } from "../../utils/hooks/useProducts";

export default function ProductList() {
  const [filters, setFilters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { dataCategories, isLoadingCategories } = useCategories();
  const { dataProducts, isLoadingProducts } = useProducts();

  let results = dataProducts.results;
  if (filters.length > 0) {
    results = dataProducts.results.filter((product) =>
      filters.includes(product.data.category.id)
    );
  }

  useEffect(() => {
    if (!isLoadingCategories && !isLoadingProducts) {
      window.scrollTo(0, 0);
      setIsLoading(false);
    }
  }, [isLoadingCategories, isLoadingProducts]);

  return (
    <Styles.ProductListPage>
      <h1>Product List Page</h1>
      {isLoading && <LoadingComponent />}
      {!isLoading && (
        <Styles.ContentContainer>
          <Styles.Sidebar>
            <SidebarComponent
              categories={dataCategories.results}
              setFilters={setFilters}
              filters={filters}
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
