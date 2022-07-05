import ImageGallery from "react-image-gallery";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import { FaGenderless } from "react-icons/fa";
import { useProductInfo } from "../../utils/hooks/useProductInfo";
import NotificationComponent from "../../components/Notification/NotificationComponent";
import {
  addCartItem,
  getCartItems,
  updateQtyInItem,
  getCartItemsIds,
  displayNotification,
  getNotificationData,
  updateNotificationData,
} from "../../redux/slices/cartSlice";
import {
  getIsLoadingPDP,
  setIsLoadingPDP,
} from "../../redux/slices/loadingSlice";
import "react-image-gallery/styles/css/image-gallery.css";
import * as Styles from "./product-details-styles";

export default function ProductDetails() {
  const params = useParams();
  const { dataProduct, isLoadingProduct } = useProductInfo(params.productId);
  const [productImages, setProductImages] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const cartItemsIds = useSelector(getCartItemsIds);
  const isLoading = useSelector(getIsLoadingPDP);
  const showNotification = useSelector(displayNotification);
  const notificationData = useSelector(getNotificationData);

  useEffect(() => {
    if (!isLoadingProduct) {
      window.scroll(0, 0);
      dispatch(setIsLoadingPDP(false));
      const images2 = dataProduct.results[0].data.images.map((img) => ({
        original: img.image.url,
        thumbnail: img.image.url,
      }));

      setProductImages(images2);
      setProductInfo(dataProduct.results[0]);
    }
  }, [isLoadingProduct, dataProduct, productInfo, dispatch]);

  const addToCart = (qty, info) => {
    const item = {
      id: productInfo.id,
      sku: productInfo.data.sku,
      qty: qty,
      name: productInfo.data.name,
      imageUrl: productInfo.data.mainimage.url,
      imageAlt: productInfo.data.mainimage.alt,
      price: productInfo.data.price.toFixed(2),
      stock: productInfo.data.stock,
    };

    dispatch(addCartItem({ item, info }));
  };

  const updateProductInCart = (qty, info) => {
    cartItems.forEach((item) => {
      const totalQty = parseInt(item.qty) + parseInt(qty);
      if (item.id === productInfo.id) {
        if (totalQty < productInfo.data.stock) {
          const item = { id: productInfo.id, qty: totalQty };
          dispatch(updateQtyInItem({ item, info }));
        } else {
          info.error = true;
          info.errorMsg = "Product quantity exceed products in stock";
          dispatch(updateNotificationData(info));
        }
      }
    });
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    const { qtyInput } = event.target.elements;
    const info = {
      imageUrl: productInfo.data.mainimage.url,
      name: productInfo.data.name,
      qty: qtyInput.value,
      error: false,
      errorMsg: "",
    };

    setTimeout(() => {
      if (cartItemsIds.includes(productInfo.id)) {
        updateProductInCart(qtyInput.value, info);
      } else {
        addToCart(qtyInput.value, info);
      }
    }, 1000);
  };

  return (
    <Styles.ProductDetailsPage>
      {isLoading && <LoadingComponent />}
      {!isLoading && (
        <Styles.ProductDataContainer>
          {showNotification && (
            <NotificationComponent data={notificationData} />
          )}
          <Styles.Container>
            <Styles.Container className="product-images">
              <Styles.Tags className="mobile">
                <span>{productInfo.tags.join(" | ").toUpperCase()}</span>
              </Styles.Tags>
              <h1 className="mobile">{productInfo.data.name}</h1>
              <ImageGallery
                items={productImages}
                autoPlay={false}
                showPlayButton={false}
                lazyLoad={true}
              />
            </Styles.Container>
            <Styles.ProductInfoContainer>
              <Styles.Tags className="desktop">
                <span>{productInfo.tags.join(" | ").toUpperCase()}</span>
              </Styles.Tags>
              <h1 className="desktop">{productInfo.data.name}</h1>
              <Styles.DescriptiveInfo>
                <span className="featured-spec">
                  <Styles.Label>{`CATEGORY: `}</Styles.Label>
                  {productInfo.data.category.slug.toUpperCase()}
                </span>
                <Styles.SpecList>
                  {productInfo.data.specs.map((spec) => (
                    <li key={spec.spec_name}>
                      <span>
                        <Styles.Label>{`${spec.spec_name}: `}</Styles.Label>
                        {spec.spec_value}
                      </span>
                    </li>
                  ))}
                </Styles.SpecList>
                <Styles.PriceLabel>{`$ ${productInfo.data.price.toFixed(
                  2
                )}`}</Styles.PriceLabel>
                <Styles.StockLabel>
                  <FaGenderless />
                  {productInfo.data.stock > 0 ? (
                    <span>In Stock</span>
                  ) : (
                    <span>Out Of Stock</span>
                  )}
                </Styles.StockLabel>
                <p>
                  SKU: <span>{productInfo.data.sku}</span>
                </p>
              </Styles.DescriptiveInfo>
              <Styles.ActionsContainer>
                <Styles.Form onSubmit={handleAddToCart}>
                  <Styles.Select name="qtyInput" id="qtyInput">
                    {Array.from(
                      { length: productInfo.data.stock },
                      (_, idx) => (
                        <option key={idx} value={idx + 1}>
                          {idx + 1}
                        </option>
                      )
                    )}
                  </Styles.Select>
                  <AddToCartButton />
                </Styles.Form>
              </Styles.ActionsContainer>
            </Styles.ProductInfoContainer>
          </Styles.Container>
          <Styles.Description>
            {productInfo.data.description[0].text}
          </Styles.Description>
        </Styles.ProductDataContainer>
      )}
    </Styles.ProductDetailsPage>
  );
}
