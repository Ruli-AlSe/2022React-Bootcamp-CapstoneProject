import styled from "styled-components";

export const AddToCartBtn = styled.button`
  align-items: center;
  background-color: #165dba;
  border: none;
  border-radius: 0.1875rem;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 0.875rem;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25rem;
  min-height: 3.25rem;
  padding: 1rem 2.5rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  min-width: 50%;

  & svg {
    display: none;
    margin-left: 30px;
  }

  &:hover {
    background-color: #114284;

    svg {
      display: block;
    }
  }
`;
