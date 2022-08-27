import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  & .brand-button {
    margin: 25px 20px;
    display: flex;
    text-decoration: none;
    cursor: pointer;
  }

  & .brand-button .image {
    border-radius: 30%;
    width: 4rem;
    margin-right: 10px;
    height: 4rem;
  }

  & .brand-button .title {
    margin: 10px 0;
  }

  & .cart-nav-link {
    width: 40px;
    height: 40px;
    border: 0;
    background-color: #fff;
    cursor: pointer;

    & svg {
      width: 30px;
      height: 30px;
      color: gray;
      padding-bottom: 8px;
    }

    & .cart-badge-container {
      height: 0;
      position: relative;
      z-index: 2;
      top: -7rem;
      left: 10px;

      & .cart-badge {
        background-color: #0096d6;
        border: 2px solid #fff;
        border-radius: 50%;
        box-sizing: content-box;
        color: #fff;
        display: inline-block;
        font-size: 0.75rem;
        height: 20px;
        left: 17px;
        line-height: 21px;
        min-width: 19px;
        padding-left: 1px;
        position: relative;
        text-align: center;
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin: 25px 0;
  margin-right: 50px;
  display: flex;
  justify-content: flex-start;
  width: 25%;
  line-height: 76px;
  align-items: center;

  @media screen and (max-width: 1230px) {
    width: 35%;
  }

  @media screen and (max-width: 880px) {
    width: 25%;
    margin: 25px 0;
  }
`;

export const SearchInput = styled.input`
  font-size: 15px;
  padding: 6px 12px 6px 15px;
  background-color: white;
  border-bottom: 2px solid gray;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  width: 13rem;
  font-style: italic;

  @media screen and (max-width: 880px) {
    display: none;
  }
`;

export const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  background-color: white;
  cursor: pointer;
  margin-right: 30px;

  & svg {
    width: 25px;
    height: 25px;
  }
`;
