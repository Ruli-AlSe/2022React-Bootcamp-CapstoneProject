import SliderComponent from "../components/Slider/SliderComponent";
import FeaturedProductsComponent from "../components/FeaturedProducts/FeaturedProductsComponent";
import CategoryGridComponent from "../components/CategoryGrid/CategoryGridComponent";
import LoadingComponent from "../components/Loading/LoadingComponent";
import { useState, useEffect } from "react";
const featuredProducts = require("../mocks/en-us/featured-products.json");

const Home = ({ isLoading, data, isLoadingCategories, dataCategories }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [firstTileIdx, setFirstTileIdx] = useState(0);
  let lastTileIdx = firstTileIdx + 4;
  const bannerResults = data.results;
  const categoryResults = dataCategories.results;
  const productResults = featuredProducts.results;

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

  useEffect(() => {}, [isLoading]);

  return (
    <div>
      {isLoading && <LoadingComponent />}
      {!isLoading && (
        <SliderComponent
          images={bannerResults}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          activeBanner={slideIndex}
          isLoading={isLoading}
        />
      )}
      {isLoadingCategories && <LoadingComponent />}
      {!isLoadingCategories && (
        <CategoryGridComponent categories={categoryResults} />
      )}
      <FeaturedProductsComponent
        products={productResults}
        firstTileIdx={firstTileIdx}
        lastTileIdx={lastTileIdx}
        nextProductGrid={nextProductGrid}
        prevProductGrid={prevProductGrid}
      />
    </div>
  );
};

export default Home;
