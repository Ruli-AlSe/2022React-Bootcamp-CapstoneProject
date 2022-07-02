import SliderComponent from "../components/Slider/SliderComponent";
import FeaturedProductsComponent from "../components/FeaturedProducts/FeaturedProductsComponent";
import CategoryGridComponent from "../components/CategoryGrid/CategoryGridComponent";
import LoadingComponent from "../components/Loading/LoadingComponent";
import { useState, useEffect } from "react";
import { useFeaturedBanners } from "../utils/hooks/useFeaturedBanners";
import { useProducts } from "../utils/hooks/useProducts";
import { useCategories } from "../utils/hooks/useCategories";

const Home = () => {
  const { dataBanners, isLoadingBanners } = useFeaturedBanners();
  const { dataCategories, isLoadingCategories } = useCategories();
  const { dataProducts, isLoadingProducts } = useProducts("featured");
  const [slideIndex, setSlideIndex] = useState(0);
  const [firstTileIdx, setFirstTileIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  let lastTileIdx = firstTileIdx + 4;
  const bannerResults = dataBanners.results;
  const categoryResults = dataCategories.results;
  const productResults = dataProducts.results;

  const nextSlide = () => {
    if (slideIndex !== bannerResults.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === bannerResults.length - 1) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(bannerResults.length - 1);
    }
  };

  const nextProductGrid = () => {
    if (!(firstTileIdx + 4 >= productResults.length)) {
      setFirstTileIdx(firstTileIdx + 4);
      lastTileIdx = firstTileIdx + 4;
    }
  };

  const prevProductGrid = () => {
    if (firstTileIdx - 4 >= 0) {
      setFirstTileIdx(firstTileIdx - 4);
    } else {
      setFirstTileIdx(0);
    }
    lastTileIdx = firstTileIdx + 4;
  };

  useEffect(() => {
    if (!isLoadingBanners && !isLoadingCategories && !isLoadingProducts) {
      setIsLoading(false);
    }
  }, [isLoadingBanners, isLoadingCategories, isLoadingProducts]);

  return (
    <div>
      {isLoading && <LoadingComponent />}
      {!isLoading && (
        <>
          <SliderComponent
            images={bannerResults}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
            activeBanner={slideIndex}
            isLoadingBanners={isLoadingBanners}
          />
          <CategoryGridComponent categories={categoryResults} />
          <FeaturedProductsComponent
            products={productResults}
            firstTileIdx={firstTileIdx}
            lastTileIdx={lastTileIdx}
            nextProductGrid={nextProductGrid}
            prevProductGrid={prevProductGrid}
          />
        </>
      )}
    </div>
  );
};

export default Home;
