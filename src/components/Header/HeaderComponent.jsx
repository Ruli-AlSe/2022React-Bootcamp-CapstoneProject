import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  displayMiniCart,
  setDisplayMiniCart,
  getTotalItems,
} from "../../redux/slices/cartSlice";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import MiniCart from "../Cart/MiniCart";
import * as Styles from "./header-styles";

const HeaderComponent = () => {
  const server = "https://d3jmn01ri1fzgl.cloudfront.net";
  const path =
    "/photoadking/webp_thumbnail/5f9294c203d69_template_image_1603441858.webp";
  const dispatch = useDispatch();
  const showMinicart = useSelector(displayMiniCart);
  const totalItems = useSelector(getTotalItems);

  const renderMiniCart = (e, flag) => {
    console.log(e);
    dispatch(setDisplayMiniCart(flag));
  };

  return (
    <Styles.StyledHeader>
      <Link to={"/home"} className="brand-button">
        <img className="image" src={server + path} alt="Brand Logo" />
        <h2 className="title">Company Brand</h2>
      </Link>
      <Styles.ButtonsContainer>
        <Styles.SearchInput placeholder="what are you looking for?" disabled />
        <Styles.SearchButton>
          <FaSearch />
        </Styles.SearchButton>
        <Link
          to={"/cart"}
          className="cart-nav-link"
          onMouseEnter={(e) => renderMiniCart(e, true)}
        >
          <FaShoppingCart />
          {totalItems > 0 && (
            <span className="cart-badge-container">
              <span className="cart-badge">{totalItems}</span>
            </span>
          )}
        </Link>
      </Styles.ButtonsContainer>
      {showMinicart && <MiniCart />}
    </Styles.StyledHeader>
  );
};

export default HeaderComponent;
