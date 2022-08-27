import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";
import { getDataFromAPI } from "../api";
import {
  setIsLoadingHome,
  setIsLoadingPLP,
  getIsLoadingHome,
  getIsLoadingPLP,
} from "../../redux/slices/loadingSlice";
import { useDispatch, useSelector } from "react-redux";

export function useProducts({ productType = "general", pageType = "home" }) {
  const { ref: apiRef, isLoadingProducts: isApiMetadataLoading } =
    useLatestAPI();
  const [products, setProducts] = useState(() => ({
    dataProducts: {},
    isLoadingProducts: true,
  }));
  const dispatch = useDispatch();
  const isLoadingHome = useSelector(getIsLoadingHome);
  const isLoadingPLP = useSelector(getIsLoadingPLP);
  const isLoading = pageType === "home" ? isLoadingHome : isLoadingPLP;

  if (!isLoading && !products.dataProducts.results) {
    if (pageType === "home") {
      dispatch(setIsLoadingHome(true));
    } else {
      dispatch(setIsLoadingPLP(true));
    }
  }

  const handleSetProducts = ({ data, isLoading }) => {
    setProducts({ dataProducts: data, isLoadingProducts: isLoading });
  };

  useEffect(() => {
    const apiUrl = {
      general: `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&lang=en-us&pageSize=60`,
      featured: `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&q=${encodeURIComponent(
        '[[at(document.tags, ["Featured"])]]'
      )}&lang=en-us&pageSize=16`,
    };
    const controller = new AbortController();

    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    getDataFromAPI(handleSetProducts, apiUrl[productType], controller);

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, productType]);

  return products;
}
