import styled from "styled-components";

export const MiniCartContainer = styled.div`
  position: absolute;
  top: 90px;
  right: 50px;
  background: #fff;
  border: 2px solid #ccc;
  height: auto;
  margin: 0;
  min-width: 620px;
  padding: 0;
  z-index: 2000;

  & .close_btn {
    background: url(//www.hp.com/us-en/shop/app/assets/images/icons/cart-sprites.png?_=1);
    background-position: -44px -5px;
    display: block;
    height: 24px;
    opacity: 0.5;
    position: absolute;
    right: 8px;
    top: 8px;
    width: 24px;
    border: 0;
    cursor: pointer;
  }

  & .minicart_contents {
    font-size: 16px;
    font-weight: 300;
    line-height: 1;
    padding: 20px 30px 0;
    text-align: left;

    & .minicart_title {
      clear: both;
      margin-bottom: 20px;
      overflow: hidden;

      & h3 {
        display: inline-block;
        font-size: 26px;
        font-weight: 100;
        line-height: 1;
        margin: 0.2em 25px 0.5em 0;
      }

      & a {
        color: #0171ad;
        font-weight: 100;
        text-decoration: none;
      }
    }

    & .mcprodcont {
      max-height: 400px;
      overflow: auto;

      & .productrow {
        border-bottom: 1px solid #ddd;
        clear: both;
        display: block;
        font-weight: 100;
        overflow: hidden;
        padding: 15px 0;

        & .mcprodimg {
          float: left;
          width: 15%;

          & img {
            margin-top: 5px;
            width: 65px;
          }
        }

        & .mcprodname {
          float: left;
          width: 35%;

          & a {
            color: #000;
            display: inline-block;
            font-size: 16px;
            font-weight: 100;
            line-height: 18px;
            margin: 5px 15px 8px 5px;
          }
        }

        & .mcprodqty {
          float: left;
          position: relative;
          width: 20%;
          padding-top: 8px;
        }

        & .mcprodprice {
          display: inline-block;
          text-align: right;
          width: 30%;
          padding-top: 10px;
        }
      }
    }

    & .mccarttotal {
      clear: both;
      display: block;
      font-weight: 100;
      overflow: hidden;
      padding: 15px 0;

      & .mctotalprice {
        float: right;
      }
    }

    & .mccta {
      padding: 20px 0;
      text-align: right;

      & .btn {
        cursor: pointer;
        display: inline-block;
        font-weight: 400;
        height: 44px;
        letter-spacing: 0.3px;
        line-height: 44px;
        max-width: 320px;
        min-width: 110px;
        padding: 0 32px;
        text-transform: uppercase;
        transition: color 0.4s, background-color 0.4s, border-color 0.4s;

        &.btn-primary {
          background: #0171ad;
          border: 1px solid #0171ad;
          color: #fff;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  }
`;
