import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getCartItems, getCartSubtotal } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import * as Styles from "./checkout-styles";

export default function Checkout() {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cartItems = useSelector(getCartItems);
  const subtotal = useSelector(getCartSubtotal);
  const taxes = subtotal * 0.16;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
        <select id="inputQty" defaultValue={parseInt(item.qty)}>
          {Array.from({ length: parseInt(item.stock) + 1 }, (_, idx) => (
            <option key={idx} value={idx}>
              {idx}
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

  console.log("**** errors", errors);

  return (
    <Styles.CheckoutWrapper>
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
