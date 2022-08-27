import styled from "styled-components";

export const CheckoutWrapper = styled.div`
  width: 100%;
  min-height: 750px;
`;

export const MainContainer = styled.div`
  max-width: 1220px !important;
  width: 100%;
  margin: 60px auto 0 auto;
  display: table;
  height: 100%;
  padding: 0;
`;

export const FormContainer = styled.div`
  float: left;
  width: calc(100% - 415px);
`;

export const Row = styled.div`
  float: left;
  width: 100%;
  margin-bottom: 30px;

  & .text-area-wrapper {
    height: 150px;
  }
`;

export const Field = styled.div`
  padding: 9px 15px;
  float: left;
  position: relative;
  width: 40%;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 20px;

  &.order-notes {
    width: 86%;
    height: 120px;
  }

  &.error {
    border: 1px solid red;
  }

  & input,
  & textarea {
    font-weight: 100;
    font-size: 18px;
    border: 1px solid #bbb;
    outline: 0;
    padding-top: 12px;
    width: 100%;
    z-index: 10;
    position: relative;
    background-color: transparent;

    &.error {
      border: 1px solid red;
    }
  }

  & textarea {
    height: 80px !important;
    width: 100% !important;
  }

  & label {
    font-size: 18px;
    color: #4d4d4d;
    cursor: pointer;
    display: block;
    font-weight: 500;
    margin-bottom: 0.1875em;
    text-align: left;
  }
`;

export const ErrorMessage = styled.p`
  color: #bf2026;
  font-size: 14px;
  float: left;
  margin: 5px 0 0 0;
`;

export const ButtonsSection = styled.div`
  width: 100%;
  display: flex;
`;

export const PlaceOrderButton = styled.button`
  width: 180px;
  padding: 16px 30px;
  text-align: center;
  background-color: #1159a0;
  color: #fff;
  border-radius: 3px;
  border: 0;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover {
    background-color: #0096d6;
  }
`;

export const SideBar = styled.div`
  display: block;
  height: 750px;
  width: 415px;
  margin: auto;
  position: relative;
  float: right;
  inset: auto;
  vertical-align: top;
  top: -110px;
`;

export const InfoContainer = styled.div`
  float: right;
  width: 415px;
  inset: 0px auto auto 0px;
  position: absolute;
`;
export const Padding = styled.div`
  margin-left: 30px;

  & .cart-info-container {
    background-color: #fff;
  }
`;

export const SidebarTitle = styled.p`
  padding: 25px 0 20px 0;
  margin: 0 auto;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1px;
`;

export const ProductRow = styled.div`
  width: 365px;
  background-color: #fafafa;
  display: inline;
  margin: 0 auto;
  margin-bottom: 5px;
  padding-bottom: 20px;
  height: 110px;

  & .product-info {
    display: flex;

    & img {
      padding: 0 10px;
      display: table-cell;
      vertical-align: middle;
      max-width: 80px;
    }

    & a {
      padding: 20px 0 5px;
      font-size: 14px;
      font-weight: normal;
      white-space: nowrap;
      width: 208px;
      color: #000;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 18px;
    }
  }
`;

export const ProductPrice = styled.div`
  float: right;
  width: 70%;
  margin-top: 20px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -40px;

  & select {
    height: 30px;
    width: 50px;
    border: 1px solid #ccc;
    padding: 5px 8px;
    color: #000;
    font-size: 14px;
    margin: -8px 0 0;
    cursor: pointer;
  }

  & .formated-price {
    float: right;
    width: 65%;
    text-align: right;
    padding-right: 20px;

    & p {
      font-size: 14px;
      font-weight: normal;
    }
  }
`;

export const CartTotalContainer = styled.div`
  padding-top: 5px;
  padding-bottom: 30px;
`;

export const Summary = styled.div`
  border-bottom: 1px solid #ccc;
  width: 320px;
  margin: 0 auto;
  display: table;

  & .summary-text {
    float: left;
    font-size: 16px;
    font-weight: 100;
    padding: 20px 0;
  }

  & .summary-number {
    float: right;
    font-size: 16px;
    font-weight: 100;
    text-align: right;
    padding: 20px 0;
  }
`;
