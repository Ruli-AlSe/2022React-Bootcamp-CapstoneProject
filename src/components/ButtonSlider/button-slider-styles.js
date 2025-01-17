import styled from "styled-components";

export const ButtonSlider = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f1f1f1;
  border: 1px solid rgba(34, 34, 34, 0.287);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &.prev {
    top: 50%;
    left: 20px;
    transform: translateY(-60%);
  }

  &.next {
    top: 50%;
    right: 20px;
    transform: translateY(-60%);
  }

  & svg {
    font-size: 24px;
  }

  @media screen and (max-width: 800px) {
    &.prev {
      transform: translateY(470%);
    }

    &.next {
      transform: translateY(470%);
    }
  }

  @media screen and (max-width: 600px) {
    border-radius: 0;
    background: #f1f1f1;
    position: relative;

    &.prev {
      left: 4rem;
    }

    &.next {
      right: 4rem;
    }
  }
`;
