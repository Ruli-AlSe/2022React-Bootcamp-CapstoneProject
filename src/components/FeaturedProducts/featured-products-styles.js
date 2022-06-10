import styled from "styled-components";

export const StyledFeaturedProducts = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow: hidden;
  width: 99%;

  & .products_container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    height: 35rem;
    margin: 0;
  }

  & .product_tile {
    max-width: 20rem;
    max-height: 20rem;
  }

  & img {
    max-width: 20rem;
    max-height: 20rem;
  }

  @media screen and (max-width: 800px) {
    & .products_container button {
      transform: translateY(10%) !important;
    }

    & img {
      max-width: 7rem;
      max-height: 7rem;
    }
  }
`;

export const Products = styled.div`
  display: flex;
  overflow: hidden;
`;
