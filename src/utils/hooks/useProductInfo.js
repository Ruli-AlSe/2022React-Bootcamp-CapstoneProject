import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";
import { getDataFromAPI } from "../api";

export function useProductInfo(productId) {
  const { ref: apiRef, isLoadingProducts: isApiMetadataLoading } =
    useLatestAPI();
  const [productInfo, setProductInfo] = useState(() => ({
    dataProduct: {},
    isLoadingProduct: true,
  }));

  const handleSetProductInfo = ({ data, isLoading }) => {
    setProductInfo({ dataProduct: data, isLoadingProduct: isLoading });
  };

  useEffect(() => {
    const apiUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
      `[[at(document.id, "${productId}")]]`
    )}&lang=en-us`;

    const controller = new AbortController();

    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    getDataFromAPI(handleSetProductInfo, apiUrl, controller);

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, productId]);

  return productInfo;
}
