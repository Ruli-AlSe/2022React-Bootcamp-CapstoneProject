import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCartItems,
  removeCartItem,
  updateQtyInItem,
  getCartSubtotal,
} from "../../redux/slices/cartSlice";
import * as Styles from "./cart-styles";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const subtotal = useSelector(getCartSubtotal);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const updateProductsInCart = (event, product) => {
    event.preventDefault();
    const inputQty = event.target.value;

    if (parseInt(inputQty) > 0) {
      const item = { id: product.id, qty: inputQty };
      dispatch(updateQtyInItem({ item }));
    } else {
      dispatch(removeCartItem({ id: product.id }));
    }
  };

  const itemsRow = cartItems.map((item) => (
    <Styles.ListItem key={item.id}>
      <Styles.Image src={item.imageUrl} alt={item.alt} />
      <Styles.MainInfo>
        <Link to={`/product/${item.id}`} className="link-name">
          {item.name}
        </Link>
        <Styles.Sku>{`SKU: ${item.sku}`}</Styles.Sku>
      </Styles.MainInfo>
      <Styles.Qty>
        <label htmlFor="inputQty" id="inputQty" style={{ marginTop: "10px" }}>
          QTY:
        </label>
        <Styles.Select
          id="inputQty"
          onChange={(event) => updateProductsInCart(event, item)}
          defaultValue={parseInt(item.qty)}
        >
          {Array.from({ length: parseInt(item.stock) + 1 }, (_, idx) => (
            <option key={idx} value={idx}>
              {idx}
            </option>
          ))}
        </Styles.Select>
      </Styles.Qty>
      <Styles.PriceContainer>
        <p>
          <b>Price</b>
        </p>
        <p>{`$ ${(parseInt(item.qty) * parseFloat(item.price)).toFixed(2)}`}</p>
      </Styles.PriceContainer>
    </Styles.ListItem>
  ));

  const PaymentInfo = (
    <Styles.ContentBox>
      <Styles.CartTitle>Cart Total</Styles.CartTitle>
      <Styles.TotalPriceContainer>
        <span>{formatter.format(subtotal)}</span>
        <Styles.TaxTag> + Tax</Styles.TaxTag>
      </Styles.TotalPriceContainer>
      <Styles.CheckoutBox>
        <Styles.CheckoutBoxTitle>checkout</Styles.CheckoutBoxTitle>
        <div
          className="paypay-login"
          onClick={() =>
            window.location.replace("https://www.paypal.com/signin")
          }
        >
          <img
            src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg"
            alt="paypal logo"
          />
          <span>Checkout</span>
        </div>
        <Link to="/guest-checkout" className="guest-checkout">
          checkout as guest
        </Link>
      </Styles.CheckoutBox>
    </Styles.ContentBox>
  );

  const defaultView = (
    <Styles.DefaultView>
      <h4>0</h4>
      <h5>None is the loneliest number.</h5>
      <p>Find some stuff to keep your cart company.</p>
      <Link to="/products">Shop now</Link>
    </Styles.DefaultView>
  );

  return (
    <Styles.CartWrapper>
      <h1>Welcome to your cart</h1>
      {/*<button onClick={() => dispatch(resetCart())}>Reset Cart</button>*/}
      {cartItems.length > 0 ? (
        <Styles.ContentWrapper>
          <Styles.ItemsWrapper>{itemsRow}</Styles.ItemsWrapper>
          <Styles.PaymentWrapper>{PaymentInfo}</Styles.PaymentWrapper>
        </Styles.ContentWrapper>
      ) : (
        defaultView
      )}
    </Styles.CartWrapper>
  );
}
