import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";
import { getDataFromAPI } from "../api";

export function useCategories() {
  const { ref: apiRef, isLoadingCategories: isApiMetadataLoading } =
    useLatestAPI();
  const [categories, setCategories] = useState(() => ({
    dataCategories: {},
    isLoadingCategories: true,
  }));
  const handleSetCategories = ({ data, isLoading }) => {
    setCategories({ dataCategories: data, isLoadingCategories: isLoading });
  };

  useEffect(() => {
    const apiUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
      '[[at(document.type, "category")]]'
    )}&lang=en-us&pageSize=30`;

    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    const controller = new AbortController();

    getDataFromAPI(handleSetCategories, apiUrl, controller);

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return categories;
}
