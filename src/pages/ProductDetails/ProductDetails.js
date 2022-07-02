import LoadingComponent from "../../components/Loading/LoadingComponent";
import ImageGallery from "react-image-gallery";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import { FaGenderless } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductInfo } from "../../utils/hooks/useProductInfo";
import "react-image-gallery/styles/css/image-gallery.css";
import * as Styles from "./product-details-styles";

export default function ProductDetails() {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { dataProduct, isLoadingProduct } = useProductInfo(params.productId);
  const [productImages, setProductImages] = useState([]);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    if (!isLoadingProduct) {
      setIsLoading(false);

      const images2 = dataProduct.results[0].data.images.map((img) => ({
        original: img.image.url,
        thumbnail: img.image.url,
      }));
      console.log(dataProduct);

      setProductImages(images2);
      setProductInfo(dataProduct.results[0]);
    }
  }, [isLoadingProduct, dataProduct]);

  return (
    <Styles.ProductDetailsPage>
      {isLoading && <LoadingComponent />}
      {!isLoading && (
        <Styles.ProductDataContainer>
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
                <Styles.Select name="items" id="items">
                  {Array.from({ length: productInfo.data.stock }, (_, idx) => (
                    <option key={idx} value={idx}>
                      {idx + 1}
                    </option>
                  ))}
                </Styles.Select>
                <AddToCartButton />
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
