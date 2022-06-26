import styled from "styled-components";

export const StyledContainer = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0;
  justify-content: center;
`;

export const ListItem = styled.li`
  margin-right: 10px;
`;

export const Button = styled.button`
  border: 1px solid #ccc;
  color: #000;
  padding: 0;
  width: 120px;
  height: 36px;
  margin-right: 4px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: #ffaa07d9;
  }

  &.disabled {
    background-color: #ccc;
    cursor: default;
    color: #7d7d7d;
  }

  &.disabled:hover {
    background-color: #ccc;
    color: #7d7d7d;
  }

  & span {
    font-size: 18px;
  }
`;

export const NumberButton = styled.button`
  height: 36px;
  width: 36px;
  background-color: white;
  border: 1px solid lightgray;
  cursor: pointer;
  color: #000;
  font-weight: #000;

  &.active {
    background-color: #ffaa07d9;
  }

  &:hover {
    background-color: #ffaa07d9;
  }
`;
