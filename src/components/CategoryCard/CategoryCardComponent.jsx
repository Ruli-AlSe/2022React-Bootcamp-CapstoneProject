import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as Styles from "./category-card-styles";

const CategoryCardComponent = ({ categoryInfo }) => {
  return (
    <Styles.StyledCard>
      <Styles.CardImage
        src={categoryInfo.data.main_image.url}
        alt={categoryInfo.data.main_image.alt}
      />
      <Link
        to={`/products?category=${encodeURIComponent(
          categoryInfo.data.name.toLowerCase()
        )}`}
      >
        {categoryInfo.data.name}
      </Link>
    </Styles.StyledCard>
  );
};

CategoryCardComponent.propTypes = {
  categoryInfo: PropTypes.shape({
    data: PropTypes.shape({
      main_image: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryCardComponent;
