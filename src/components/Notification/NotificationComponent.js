import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaRegWindowClose, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setDisplayNotification } from "../../redux/slices/cartSlice";
import * as Styles from "./notification-styles";

export default function NotificationComponent({ data }) {
  const dispatch = useDispatch();
  const closeNotification = () => {
    dispatch(setDisplayNotification(false));
  };
  const indicatorText = data.error
    ? "Something went wrong"
    : `${data.qty} ${data.qty > 1 ? "items" : "item"} added to your cart`;
  const onSuccessNotification = (
    <>
      <Styles.BlockWrapper>
        <img src={data.imageUrl} alt={data.name} />
        <h3>{data.name}</h3>
      </Styles.BlockWrapper>
      <Styles.ButtonContainer>
        <Styles.ContinueShoppingBtn onClick={closeNotification}>
          <FaArrowLeft />
          continue shopping
        </Styles.ContinueShoppingBtn>
        <Link
          to="/cart"
          className="go-to-cart-button"
          onClick={closeNotification}
        >
          go to cart
          <FaArrowRight />
        </Link>
      </Styles.ButtonContainer>
    </>
  );
  const onErrorNotification = (
    <Styles.MessageContainer>
      <Styles.BlockWrapper>
        <h3>{data.errorMsg}</h3>
      </Styles.BlockWrapper>
      <Styles.ContinueShoppingBtn onClick={closeNotification}>
        <FaArrowLeft />
        continue shopping
      </Styles.ContinueShoppingBtn>
    </Styles.MessageContainer>
  );

  return (
    <Styles.ComponentOverlay>
      <Styles.ModalModule>
        <Styles.CloseButton
          onClick={closeNotification}
          className={data.error ? "error" : ""}
        >
          <FaRegWindowClose />
        </Styles.CloseButton>
        <Styles.Indicator className={data.error ? "error" : ""}>
          {indicatorText}
        </Styles.Indicator>
        <Styles.PurchaseSummary>
          {data.error ? onErrorNotification : onSuccessNotification}
        </Styles.PurchaseSummary>
      </Styles.ModalModule>
    </Styles.ComponentOverlay>
  );
}

NotificationComponent.propTypes = {
  data: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
