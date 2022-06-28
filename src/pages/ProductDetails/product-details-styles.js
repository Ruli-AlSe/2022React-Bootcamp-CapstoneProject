import styled from "styled-components";

export const ProductDetailsPage = styled.div`
  width: 100%;
`;

export const ProductDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  & .image-gallery {
    padding-left: 40px;
    flex-basis: 60%;
  }

  @media screen and (max-width: 780px) {
    & .image-gallery {
      padding-left: 0;
    }

    & .image-gallery .image-gallery-left-nav,
    & .image-gallery .image-gallery-right-nav {
      display: none;
    }
  }
`;

export const Container = styled.div`
  display: flex;

  & .product-images {
    flex-direction: column;
    flex-basis: 50%;
  }

  & h1.mobile {
    display: none;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;

    & h1.mobile {
      display: block;
    }
  }
`;

export const ProductInfoContainer = styled.div`
  flex-basis: 50%;
  margin-left: 90px;

  & h1.desktop {
    display: block;
  }

  @media screen and (max-width: 780px) {
    margin-left: 0;

    & h1.desktop {
      display: none;
    }
  }
`;

export const Tags = styled.div`
  text-align: right;
  padding-right: 50px;
  margin: 35px 0;
  font-weight: 500;

  &.mobile {
    display: none;
  }

  &.desktop {
    display: block;
  }

  @media screen and (max-width: 780px) {
    &.mobile {
      display: block;
    }

    &.desktop {
      display: none;
    }
  }
`;

export const DescriptiveInfo = styled.div`
  margin-top: 3rem;
  border-top: 1px solid #e8e8e8;
  margin-right: 15px;
  text-align: left;
  padding-top: 2rem;
  font-size: 20px;

  @media screen and (max-width: 780px) {
    margin-right: 25px;
    margin-left: 25px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const Label = styled.span`
  color: #767676;
`;

export const SpecList = styled.ul`
  margin-bottom: 3rem;
`;

export const PriceLabel = styled.p`
  color: #2c3038;
  font-size: 26px;
  font-weight: 600;
`;

export const Select = styled.select`
  width: 3.5rem;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
`;

export const StockLabel = styled.p`
  font-size: 24px;
  display: flex;
  align-items: center;

  & svg {
    fill: #2dbf6f;
    margin-right: 10px;
  }
`;

export const Description = styled.p`
  background-color: #e8e8e8;
  padding: 5.25rem 3rem;
  font-size: 23px;
  font-weight: 600;
`;
