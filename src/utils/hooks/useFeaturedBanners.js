import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";
import { getDataFromAPI } from "../api";
import {
  setIsLoadingHome,
  getIsLoadingHome,
} from "../../redux/slices/loadingSlice";
import { useDispatch, useSelector } from "react-redux";

export function useFeaturedBanners() {
  const { ref: apiRef, isLoadingBanners: isApiMetadataLoading } =
    useLatestAPI();
  const [featuredBanners, setFeaturedBanners] = useState(() => ({
    dataBanners: {},
    isLoadingBanners: true,
  }));
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingHome);

  if (!isLoading && !featuredBanners.dataBanners.results) {
    dispatch(setIsLoadingHome(true));
  }

  const handleSetBanners = ({ data, isLoading }) => {
    setFeaturedBanners({ dataBanners: data, isLoadingBanners: isLoading });
  };

  useEffect(() => {
    const apiUrl = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
      '[[at(document.type, "banner")]]'
    )}&lang=en-us&pageSize=5`;
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    getDataFromAPI(handleSetBanners, apiUrl, controller);

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredBanners;
}
