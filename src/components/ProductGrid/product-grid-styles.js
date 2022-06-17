import styled from "styled-components";

export const Styledcontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: 30rem;
  justify-content: center;

  & img {
    width: 100%;
  }
`;
