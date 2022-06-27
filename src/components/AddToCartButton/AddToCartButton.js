import * as Styles from "./add-to-cart-button-styles";
import { FaPlus } from "react-icons/fa";

export default function AddToCartButton() {
  return (
    <Styles.AddToCartBtn>
      ADD TO CART <FaPlus />
    </Styles.AddToCartBtn>
  );
}
