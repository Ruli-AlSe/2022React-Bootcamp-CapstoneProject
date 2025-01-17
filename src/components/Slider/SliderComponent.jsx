import PropTypes from "prop-types";
import BannerComponent from "../Banner/BannerComponent";
import BtnSliderComponent from "../ButtonSlider/BtnSliderComponent";
import styles from "./Slider.module.css";

const SliderComponent = ({ images, prevSlide, nextSlide, activeBanner }) => {
  const banners = images.map((image, index) => (
    <BannerComponent
      key={image.id}
      bannerInfo={image}
      index={index}
      activeBanner={activeBanner}
    />
  ));
  return (
    <div className={styles.slider}>
      <BtnSliderComponent moveSlide={prevSlide} direction={"prev"} />
      <div className={styles.banners_container}>{banners}</div>
      <BtnSliderComponent moveSlide={nextSlide} direction={"next"} />
    </div>
  );
};

SliderComponent.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
  activeBanner: PropTypes.number.isRequired,
};

export default SliderComponent;
