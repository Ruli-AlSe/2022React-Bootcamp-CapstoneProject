import PropTypes from "prop-types";
import CategoryCardComponent from "../CategoryCard/CategoryCardComponent";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import * as Styles from "./category-grid-styles";

const CategoryGridComponent = ({ categories }) => {
  const categoriesMap = categories.map((category) => (
    <CategoryCardComponent key={category.id} categoryInfo={category} />
  ));

  return (
    <Styles.StyledGrid>
      <Styles.GridHeader>PRODUCT CATEGORIES</Styles.GridHeader>
      <Styles.GridContainer>{categoriesMap}</Styles.GridContainer>
      <Link className="styled-link" to="/products">
        View all categories <FaArrowRight />
      </Link>
    </Styles.StyledGrid>
  );
};

CategoryGridComponent.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryGridComponent;
