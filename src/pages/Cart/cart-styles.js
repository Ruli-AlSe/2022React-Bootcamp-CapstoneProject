import styled from "styled-components";

export const CartWrapper = styled.div`
  min-height: 80vh;
  width: 100%;
  margin: 0 auto;
  display: table;
  padding: 0 30px;
`;

export const ItemsWrapper = styled.ul`
  width: calc(100% - 415px);
  margin-bottom: 50px;
`;

export const ListItem = styled.li`
  display: flex;
  overflow: hidden;
  clear: both;
  padding: 25px 0;
  border-bottom: 1px solid #ddd;
  font-weight: 400;
  flex-direction: row;
`;

export const Image = styled.img`
  float: left;
  width: 15%;
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
`;

export const Sku = styled.span`
  display: block;
  font-size: 17px;
  color: #767676;
  margin-top: 10px;
`;

export const Qty = styled.div`
  padding-top: 30px;
  width: 20%;
  height: 10rem;
  display: flex;
  justify-content: space-around;
`;

export const Select = styled.select`
  height: 40px;
  width: 40px;
  font-size: 17px;
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
