import * as Styles from "./add-to-cart-button-styles";
import { FaPlus } from "react-icons/fa";

export default function AddToCartButton({ onAddToCart }) {
  return (
    <Styles.AddToCartBtn onClick={onAddToCart}>
      ADD TO CART <FaPlus />
    </Styles.AddToCartBtn>
  );
}
