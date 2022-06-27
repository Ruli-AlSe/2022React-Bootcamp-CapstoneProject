import styled from "styled-components";

export const ProductDetailsPage = styled.div`
  width: 100%;
`;

export const ProductDataContainer = styled.div`
  display: flex;
  flex-direction: column;

  & .image-gallery {
    padding-left: 40px;
    flex-basis: 60%;
  }
`;

export const ProductInfoContainer = styled.div`
  flex-basis: 40%;
  margin-left: 90px;
`;

export const Tags = styled.div`
  text-align: right;
  padding-right: 50px;
  margin: 35px 0;
  font-weight: 500;
`;

export const DescriptiveInfo = styled.div`
  margin-top: 3rem;
  border-top: 1px solid #e8e8e8;
  margin-right: 15px;
  text-align: left;
  padding-top: 2rem;
  font-size: 20px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const Label = styled.span`
  color: #767676;
`;

export const SpecList = styled.ul`
  margin-bottom: 3rem;
`;

export const PriceLabel = styled.p`
  color: #2c3038;
  font-size: 26px;
  font-weight: 600;
`;

export const Select = styled.select`
  width: 3.5rem;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
`;

export const StockLabel = styled.p`
  font-size: 24px;
  display: flex;
  align-items: center;

  & svg {
    fill: #2dbf6f;
    margin-right: 10px;
  }
`;

export const Description = styled.p`
  background-color: #e8e8e8;
  padding: 5.25rem 3rem;
  font-size: 23px;
  font-weight: 600;
`;
