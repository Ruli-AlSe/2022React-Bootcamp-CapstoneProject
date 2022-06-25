import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";
import { getProducts } from "../api";

export function useProducts(productType = "general") {
  const { ref: apiRef, isLoadingProducts: isApiMetadataLoading } =
    useLatestAPI();
  const [products, setProducts] = useState(() => ({
    dataProducts: {},
    isLoadingProducts: true,
  }));

  const handleSetProducts = ({ dataProducts, isLoadingProducts }) => {
    setProducts({ dataProducts, isLoadingProducts });
  };

  useEffect(() => {
    const apiUrl = {
      general: `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&lang=en-us&pageSize=30`,
      featured: `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&q=${encodeURIComponent(
        '[[at(document.tags, ["Featured"])]]'
      )}&lang=en-us&pageSize=16`,
    };

    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    getProducts(handleSetProducts, apiUrl[productType]);
  }, [apiRef, isApiMetadataLoading, productType]);

  return products;
}
