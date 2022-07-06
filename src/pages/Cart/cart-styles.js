import styled from "styled-components";

export const CartWrapper = styled.div`
  min-height: 80vh;
  width: 100%;
  margin: 0 auto;
  display: block;
`;

export const ContentWrapper = styled.div`
  display: table;
  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ItemsWrapper = styled.ul`
  width: calc(97% - 415px);
  margin-bottom: 50px;
  float: left;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const ListItem = styled.li`
  display: flex;
  overflow: hidden;
  clear: both;
  padding: 25px 0;
  border-bottom: 1px solid #ddd;
  font-weight: 400;
  flex-direction: row;

  @media screen and (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  float: left;
  width: 15%;

  @media screen and (max-width: 1330px) {
    height: 150px;
  }

  @media screen and (max-width: 1024px) {
    height: 100px;
  }

  @media screen and (max-width: 520px) {
    height: auto;
    width: 10rem;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  cursor: pointer;
  height: 10rem;
  margin-top: 10px;
  padding-left: 15px;
  align-items: flex-start;

  & .link-name {
    text-decoration: none;
    color: #000;
    font-size: 20px;
  }

  & .link-name:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1024px) {
    height: 6rem;
    width: 35%;

    & .link-name {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 520px) {
    height: 3rem;
    width: 100%;
    align-items: center;

    & .link-name {
      font-size: 22px;
    }
  }
`;

export const Sku = styled.span`
  display: block;
  font-size: 17px;
  color: #767676;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
`;

export const Qty = styled.div`
  padding-top: 30px;
  width: 20%;
  height: 10rem;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1024px) {
    height: 6rem;
    width: 25%;

    & label {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 520px) {
    height: 4rem;
    width: 100%;
    justify-content: center;

    & label {
      font-size: 17px;
      margin-right: 10px;
    }
  }
`;

export const Select = styled.select`
  height: 40px;
  width: 40px;
  font-size: 17px;
  width: 25%;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    width: 25%;
  }

  @media screen and (max-width: 520px) {
    width: 10%;
  }
`;

export const PriceContainer = styled.div`
  @media screen and (max-width: 520px) {
    width: 100%;
    font-size: 18px;
  }
`;

export const DefaultView = styled.div`
  border-top: 1px solid #ccc;
  margin: 30px 0;
  padding: 50px 0;
  text-align: center;
  font-weight: 100;

  & h4 {
    font-size: 96px;
    color: #0096db;
    font-weight: 100;
    margin: 0;
  }

  & h5 {
    font-size: 32px;
    font-weight: 100;
  }

  & p {
    font-size: 18px;
    padding: 10px 0 20px 10px;
  }

  & a {
    background-color: #0096db;
    text-align: center;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: normal;
    font-weight: 100;
    border-radius: 3px;
    display: inline-block;
    padding: 16px 40px;
    letter-spacing: 1px;
  }
`;

export const PaymentWrapper = styled.div`
  display: block;
  height: 800px;
  width: 370px;
  margin: auto;
  position: relative;
  float: right;
  inset: auto;
  vertical-align: top;
  padding-right: 25px;

  @media screen and (max-width: 800px) {
    height: auto;
  }

  @media screen and (max-width: 520px) {
    padding-right: 0;
  }
`;

export const ContentBox = styled.div`
  float: right;
  width: 370px;
  background-color: #fafafa;
`;

export const CartTitle = styled.div`
  padding: 25px 0 20px 0;
  margin: 0 auto;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
`;

export const TotalPriceContainer = styled.div`
  font-size: 30px;
  letter-spacing: 1.5px;
  font-weight: 100;
  text-align: center;
  padding-bottom: 20px;
  text-transform: uppercase;
`;

export const TaxTag = styled.span`
  font-size: 14px;
  font-weight: normal;
  color: #767676;
`;

export const CheckoutBox = styled.div`
  padding: 20px;

  & .paypay-login {
    margin-bottom: 30px;
    color: #fff;
    background-color: #e19800;
    border-radius: 3px;
    padding: 12px;
    display: block;
    width: 93%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;

    & img {
      height: 26px;
      margin: 0 25px 0 50px;
    }

    & span {
      font-size: 23px;
    }
  }

  & .guest-checkout {
    display: block;
    padding: 16px;
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: normal;
    font-weight: 300;
    border-radius: 3px;
    background-color: #767676;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const CheckoutBoxTitle = styled.h4`
  display: block;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.5px;
  padding: 0 0 15px 0;
  font-weight: 100;
  margin: 0;
`;
