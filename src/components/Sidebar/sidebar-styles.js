import styled from "styled-components";

export const FiltersWrapper = styled.div`
  width: 100%;
  min-height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h3 {
    font-size: 30px;
    margin: 0;
  }
`;

export const ClearFiltersBtn = styled.button`
  border-radius: 10px;
  margin: 30px 0;
  width: 50%;
  height: 40px;
  font-size: 20px;
  background-color: #fff;
  border: 1px solid red;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:hover {
    background-color: #ff8c8c;
    color: #fff;
  }
`;

export const FiltersContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    width: 90%;
    height: 11rem;
    align-items: center;
    overflow: hidden;
    margin: 0;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ffaa07d9;
    color: white;
  }

  &.checked {
    background-color: #ffaa07d9;
    color: white;
  }

  @media screen and (max-width: 1024px) {
    height: 6rem;
    margin-right: 6px;
  }
`;

export const Label = styled.label`
  width: 100%;
  text-align: start;
  font-size: 24px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 620px) {
    font-size: 17px;
  }
`;

export const CheckBox = styled.input`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;
