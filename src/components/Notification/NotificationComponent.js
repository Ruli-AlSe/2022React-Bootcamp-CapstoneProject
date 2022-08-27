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
  const notificationType = {
    error: "Something went wrong",
    a2c: `${data.qty} ${data.qty > 1 ? "items" : "item"} added to your cart`,
    purchase: "Thank you for your purchase",
  };
  const indicatorText = notificationType[data.notificationType];
  const onProductAdded = (
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
  const otherNotification = (
    <Styles.MessageContainer>
      <Styles.BlockWrapper>
        <h3>{data.message}</h3>
      </Styles.BlockWrapper>
      <Styles.ContinueShoppingBtn onClick={closeNotification}>
        <FaArrowLeft />
        {data.notificationType === "purchase" ? "close" : "continue shopping"}
      </Styles.ContinueShoppingBtn>
    </Styles.MessageContainer>
  );

  return (
    <Styles.ComponentOverlay>
      <Styles.ModalModule>
        <Styles.CloseButton
          onClick={closeNotification}
          className={data.notificationType}
        >
          <FaRegWindowClose />
        </Styles.CloseButton>
        <Styles.Indicator className={data.notificationType}>
          {indicatorText}
        </Styles.Indicator>
        <Styles.PurchaseSummary>
          {data.notificationType === "a2c" ? onProductAdded : otherNotification}
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
