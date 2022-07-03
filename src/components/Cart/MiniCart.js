import * as Styles from "./minicart-styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItems,
  setDisplayMiniCart,
  getTotalItems,
  getCartSubtotal,
} from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export default function MiniCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const totalItems = useSelector(getTotalItems);
  const subtotal = useSelector(getCartSubtotal);

  const listItems = cartItems.map((item) => (
    <div className="productrow">
      <Link className="mcprodimg" to={`/product/${item.id}`}>
        <div className="img-ph-wrapper ">
          <img
            src={item.imageUrl}
            alt={item.imgAlt}
            aria-label="Product Image"
            className="orig-img"
          />
        </div>
      </Link>
      <div className="mcprodname">
        <Link to={`/product/${item.id}`}>{item.name}</Link>
        <span>
          <br />
          {`SKU: ${item.sku}`}
        </span>
      </div>
      <div className="mcprodqty">
        <span>
          <label>{`QTY: ${item.qty}`}</label>
        </span>
      </div>
      <div className="mcprodprice">
        <span>{`$ ${item.price}`}</span>
      </div>
    </div>
  ));

  return (
    <Styles.MiniCartContainer>
      <div className="shopping_container">
        <button
          className="close_btn"
          onClick={() => dispatch(setDisplayMiniCart(false))}
        />
        <div className="minicart_contents">
          <div className="minicart_title">
            <h3>
              {`There ${totalItems > 1 ? "are" : "is"} ${totalItems} ${
                totalItems > 1 ? "items" : "item"
              } in your cart`}
            </h3>
            <Link to="/cart">View all items &gt;</Link>
          </div>
          <div className="mcprodcont">{listItems}</div>
          <div className="mccarttotal">
            <div className="mcsubtotal">
              <div className="mcpricelabel">
                <span className="title">Sub-total before tax &amp; fees</span>
                <div className="mctotalprice">{`$ ${subtotal.toFixed(2)}`}</div>
              </div>
            </div>
          </div>
          <div className="mccta">
            <Link to="/cart" className="btn btn-primary">
              view cart &amp; check out
            </Link>
          </div>
        </div>
      </div>
    </Styles.MiniCartContainer>
  );
}
