import styled from "styled-components";

export const ComponentOverlay = styled.div`
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1040;
  transition: background-color 0.25s ease-out;
  background-color: rgba(44, 48, 56, 0.8);
`;

export const ModalModule = styled.div`
  background-color: #fff;
  text-align: center;
  z-index: 1050;
  margin: auto;
  height: auto;
  width: 50vw;
  max-height: 50vh;
  overflow-x: hidden;
  padding: 0;
  overflow-y: auto;
  position: relative;
`;

export const CloseButton = styled.button`
  background-color: #165dba;
  border: none;
  position: absolute;
  right: 25px;
  top: 15px;
  font-size: 23px;
  color: #fff;

  &.error {
    background-color: #d60a0a;
  }

  &.purchase {
    background-color: #11a053;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Indicator = styled.div`
  background-color: #165dba;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  height: 50px;
  line-height: 50px;
  text-transform: uppercase;
  width: 100%;

  &.error {
    background-color: #d60a0a;
  }

  &.purchase {
    background-color: #11a053;
  }

  @media screen and (max-width: 580px) {
    font-size: 15px;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 0 20px;
`;

export const PurchaseSummary = styled.div`
  align-items: center;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  height: 10em;
  justify-content: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 16em;
  }
`;

export const BlockWrapper = styled.div`
  align-items: center;
  display: flex;
  padding-right: 1rem;
  justify-content: space-between;

  & img {
    margin: 0 1rem;
    max-height: 3.5rem;
    max-width: 4.375rem;
  }
`;

export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 30px;
  width: 30rem;

  & .go-to-cart-button {
    align-items: center;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    font-size: 14px;
    font-weight: 600;
    justify-content: center;
    padding: 0 20px;
    text-transform: uppercase;
    background-color: #165dba;
    color: #fff;
    height: 50px;
    text-transform: uppercase;
    width: 174px;
    text-decoration: none;

    & svg {
      display: none;
    }

    &:hover {
      svg {
        display: block;
        margin-left: 30px;
      }
    }
  }

  @media screen and (max-width: 1550px) {
    flex-direction: column;
  }

  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

export const ContinueShoppingBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 50px;
  text-transform: uppercase;
  color: #165dba;
  margin-right: 1.25rem;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  background-color: inherit;

  & svg {
    display: none;
  }

  &:hover {
    svg {
      display: block;
      margin-right: 30px;
    }
  }

  @media screen and (max-width: 800px) {
    margin-right: 0;
  }
`;
