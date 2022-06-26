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
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [productsRendered, setProductsRendered] = useState([]);
  const { dataCategories, isLoadingCategories } = useCategories();
  const { dataProducts, isLoadingProducts } = useProducts();

  useEffect(() => {
    setIsLoading(true);
    if (!isLoadingCategories && !isLoadingProducts) {
      window.scrollTo(0, 0);

      function filteredProducts() {
        let results = dataProducts.results;
        if (filters.length > 0) {
          results = dataProducts.results.filter((product) =>
            filters.includes(product.data.category.id)
          );
        }

        return results;
      }

      function productsToShow(products) {
        setTotalPages(Math.ceil(results.length / productsPerPage));
        const startIdx = (currentPage - 1) * productsPerPage;
        const endIdx = currentPage * productsPerPage;
        setProductsRendered(results.slice(startIdx, endIdx));
        setIsLoading(false);
      }

      const results = filteredProducts();

      productsToShow(results);
    }
  }, [
    isLoadingCategories,
    isLoadingProducts,
    dataProducts,
    filters,
    productsPerPage,
    currentPage,
  ]);

  const onChangePagination = (products) => {
    const startIdx = (currentPage - 1) * productsPerPage;
    const endIdx = currentPage * productsPerPage;

    setProductsRendered(products.slice(startIdx, endIdx));
  };

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
              setCurrentPage={setCurrentPage}
            />
          </Styles.Sidebar>
          <Styles.Products>
            <PaginationComponent
              products={productsRendered}
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              onChangePagination={onChangePagination}
            />
            <ProductGridComponent
              className="products"
              products={productsRendered}
            />
            <PaginationComponent
              products={productsRendered}
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              onChangePagination={onChangePagination}
            />
          </Styles.Products>
        </Styles.ContentContainer>
      )}
    </Styles.ProductListPage>
  );
}
