import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import SidebarComponent from "../../components/Sidebar/SidebarComponent";
import ProductGridComponent from "../../components/ProductGrid/ProductGridComponent";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import PaginationComponent from "../../components/Pagination/PaginationComponent";
import * as Styles from "./product-list-styles";
import { useCategories } from "../../utils/hooks/useCategories";
import { useProducts } from "../../utils/hooks/useProducts";

export default function ProductList() {
  const [filtersData, setFiltersData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [productsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [productsRendered, setProductsRendered] = useState([]);
  const { dataCategories, isLoadingCategories } = useCategories();
  const { dataProducts, isLoadingProducts } = useProducts();
  let [searchParams, setSearchParams] = useSearchParams();

  const isApiLoading = useCallback(() => {
    return !isLoadingCategories && !isLoadingProducts;
  }, [isLoadingCategories, isLoadingProducts]);

  const filteredProducts = useCallback(() => {
    let results = dataProducts.results;
    if (Object.keys(filtersData).length > 0) {
      results = dataProducts.results.filter((product) =>
        Object.keys(filtersData).includes(product.data.category.id)
      );
    }

    return results;
  }, [dataProducts, filtersData]);

  const productsToShow = useCallback(
    (products) => {
      setTotalPages(Math.ceil(products.length / productsPerPage));
      const startIdx = (currentPage - 1) * productsPerPage;
      const endIdx = currentPage * productsPerPage;
      setProductsRendered(products.slice(startIdx, endIdx));
      setIsLoading(false);
    },
    [productsPerPage, currentPage]
  );

  const updateParams = useCallback(() => {
    const valueArray = Object.values(filtersData);

    if (valueArray.length > 0) {
      searchParams.set("category", valueArray);
    }
    setSearchParams(searchParams);
  }, [filtersData, searchParams, setSearchParams]);

  useEffect(() => {
    setIsLoading(true);
    if (isApiLoading()) {
      window.scrollTo(0, 0);

      updateParams();
      const results = filteredProducts();
      productsToShow(results);
    }
  }, [isApiLoading, filteredProducts, productsToShow, updateParams]);

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
              setCurrentPage={setCurrentPage}
              setFiltersData={setFiltersData}
              filtersData={filtersData}
              searchParams={searchParams}
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
