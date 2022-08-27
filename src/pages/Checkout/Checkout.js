import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  getCartItems,
  getCartSubtotal,
  updateQtyInItem,
  displayNotification,
  setDisplayNotification,
  resetCart,
} from "../../redux/slices/cartSlice";
import { addOrder, getOrders } from "../../redux/slices/orderSlice";
import { Link } from "react-router-dom";
import NotificationComponent from "../../components/Notification/NotificationComponent";
import * as Styles from "./checkout-styles";

export default function Checkout() {
  const showNotification = useSelector(displayNotification);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cartItems = useSelector(getCartItems);
  const subtotal = useSelector(getCartSubtotal);
  const taxes = subtotal * 0.16;
  const orders = useSelector(getOrders);
  const [notificationData, setNotificationData] = useState({});
  console.log("****", orders);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();
    const today = new Date();
    const order = {
      id: uniqid,
      date: today.toString(),
      customerInfo: data,
      products: cartItems,
      total: subtotal + taxes,
    };
    setNotificationData({
      notificationType: "purchase",
      message: `Your purchase has been saved with ID: ${uniqid}`,
    });
    dispatch(addOrder(order));
    dispatch(setDisplayNotification(true));
    dispatch(resetCart());
    reset();
  };

  const updateProductsInCart = (event, product) => {
    event.preventDefault();
    const inputQty = event.target.value;

    const item = { id: product.id, qty: inputQty };
    dispatch(updateQtyInItem({ item }));
  };

  const itemsRow = cartItems.map((item) => (
    <Styles.ProductRow key={item.id}>
      <div className="product-info">
        <img src={item.imageUrl} alt={item.alt} />
        <Link to={`/product/${item.id}`} className="product-name">
          {item.name}
        </Link>
      </div>
      <Styles.ProductPrice>
        <select
          id="inputQty"
          defaultValue={parseInt(item.qty)}
          onChange={(event) => updateProductsInCart(event, item)}
        >
          {Array.from({ length: parseInt(item.stock) }, (_, idx) => (
            <option key={idx} value={idx + 1}>
              {idx + 1}
            </option>
          ))}
        </select>
        <div className="formated-price">
          <p className="price">
            {formatter.format(
              (parseInt(item.qty) * parseFloat(item.price)).toFixed(2)
            )}
          </p>
        </div>
      </Styles.ProductPrice>
    </Styles.ProductRow>
  ));
  const errorTypes = {
    required: "This field is required",
    pattern: "Should contains only numbers",
  };

  return (
    <Styles.CheckoutWrapper>
      {showNotification && <NotificationComponent data={notificationData} />}
      <h1>Checkout</h1>
      <Styles.MainContainer>
        <Styles.FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Styles.Row>
              <Styles.Field className={errors.firstName ? "error" : ""}>
                <label>First Name</label>
                <input
                  className={errors.firstName ? "error" : ""}
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <Styles.ErrorMessage>
                    {errorTypes[errors.firstName.type]}
                  </Styles.ErrorMessage>
                )}
              </Styles.Field>

              <Styles.Field className={errors.lastName ? "error" : ""}>
                <label>Last Name</label>
                <input
                  className={errors.lastName ? "error" : ""}
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <Styles.ErrorMessage>
                    {errorTypes[errors.lastName.type]}
                  </Styles.ErrorMessage>
                )}
              </Styles.Field>
            </Styles.Row>

            <Styles.Row>
              <Styles.Field className={errors.email ? "error" : ""}>
                <label>Email</label>
                <input
                  className={errors.email ? "error" : ""}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <Styles.ErrorMessage>
                    {errorTypes[errors.email.type]}
                  </Styles.ErrorMessage>
                )}
              </Styles.Field>

              <Styles.Field className={errors.postCode ? "error" : ""}>
                <label>Post Code</label>
                <input
                  className={errors.postCode ? "error" : ""}
                  {...register("postCode", {
                    required: true,
                    pattern: /^[0-9]{5}/i,
                  })}
                />
                {errors.postCode && (
                  <Styles.ErrorMessage>
                    {errorTypes[errors.postCode.type]}
                  </Styles.ErrorMessage>
                )}
              </Styles.Field>
            </Styles.Row>

            <Styles.Row>
              <Styles.Field className="order-notes">
                <label>Order Notes</label>
                <textarea
                  label="Order Notes (optional)"
                  {...register("orderNotes")}
                />
              </Styles.Field>
            </Styles.Row>

            <Styles.ButtonsSection>
              <Styles.PlaceOrderButton type="submit">
                Back to cart
              </Styles.PlaceOrderButton>
              <Styles.PlaceOrderButton type="submit">
                place order
              </Styles.PlaceOrderButton>
            </Styles.ButtonsSection>
          </form>
        </Styles.FormContainer>
        <Styles.SideBar>
          <Styles.InfoContainer>
            <Styles.Padding>
              <div className="cart-info-container">
                <Styles.SidebarTitle>Cart Products</Styles.SidebarTitle>
                <Styles.BoxContainer>{itemsRow}</Styles.BoxContainer>
              </div>
              <Styles.CartTotalContainer>
                <Styles.Summary>
                  <div className="summary-text">Sub-total</div>
                  <div className="summary-number">
                    {formatter.format(subtotal)}
                  </div>
                </Styles.Summary>
                <Styles.Summary>
                  <div className="summary-text">Taxes</div>
                  <div className="summary-number">
                    {formatter.format(taxes)}
                  </div>
                </Styles.Summary>
                <Styles.Summary>
                  <div className="summary-text" style={{ fontSize: "22px" }}>
                    TOTAL
                  </div>
                  <div className="summary-number" style={{ fontSize: "22px" }}>
                    {formatter.format(subtotal + taxes)}
                  </div>
                </Styles.Summary>
              </Styles.CartTotalContainer>
            </Styles.Padding>
          </Styles.InfoContainer>
        </Styles.SideBar>
      </Styles.MainContainer>
    </Styles.CheckoutWrapper>
  );
}
