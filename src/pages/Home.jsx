import SliderComponent from "../components/Slider/SliderComponent";
import FeaturedProductsComponent from "../components/FeaturedProducts/FeaturedProductsComponent";
import CategoryGridComponent from "../components/CategoryGrid/CategoryGridComponent";
import LoadingComponent from "../components/Loading/LoadingComponent";
import { useState, useEffect } from "react";

const Home = ({
  isLoadingBanners,
  dataBanners,
  isLoadingCategories,
  dataCategories,
  isLoadingProducts,
  dataProducts,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [firstTileIdx, setFirstTileIdx] = useState(0);
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

  useEffect(() => {}, [isLoadingBanners]);

  return (
    <div>
      {isLoadingBanners && <LoadingComponent />}
      {!isLoadingBanners && (
        <SliderComponent
          images={bannerResults}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          activeBanner={slideIndex}
          isLoadingBanners={isLoadingBanners}
        />
      )}
      {isLoadingCategories && <LoadingComponent />}
      {!isLoadingCategories && (
        <CategoryGridComponent categories={categoryResults} />
      )}
      {isLoadingProducts && <LoadingComponent />}
      {!isLoadingProducts && (
        <FeaturedProductsComponent
          products={productResults}
          firstTileIdx={firstTileIdx}
          lastTileIdx={lastTileIdx}
          nextProductGrid={nextProductGrid}
          prevProductGrid={prevProductGrid}
        />
      )}
    </div>
  );
};

export default Home;
