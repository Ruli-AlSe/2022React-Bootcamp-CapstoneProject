import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useFeaturedBanners() {
  const { ref: apiRef, isLoadingBanners: isApiMetadataLoading } =
    useLatestAPI();
  const [featuredBanners, setFeaturedBanners] = useState(() => ({
    dataBanners: {},
    isLoadingBanners: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setFeaturedBanners({ dataBanners: {}, isLoadingBanners: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "banner")]]'
          )}&lang=en-us&pageSize=5`,
          {
            signal: controller.signal,
          }
        );
        const dataBanners = await response.json();

        setFeaturedBanners({ dataBanners, isLoadingBanners: false });
      } catch (err) {
        setFeaturedBanners({ dataBanners: {}, isLoadingBanners: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredBanners;
}
