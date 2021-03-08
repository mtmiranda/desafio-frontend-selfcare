import React from "react";
import styled from "styled-components";
import { products } from "../../products";
import { Product } from "../Product";

export const MainContainer = styled.main`
  margin-bottom: 6rem;
`;

export const ProductCounter = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 0px 20px;

  h3 {
    text-transform: uppercase;
  }
`;

export const ProductsList = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 0.2px solid #a5a1a1;
  justify-items: center;

  @media (max-width: 996px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Products = () => {
  return (
    <MainContainer>
      <ProductCounter>
        <h3>Promoção</h3>
        <span>{products.length} produtos</span>
      </ProductCounter>
      <ProductsList>
        {products.map((data, key) => {
          return (
            <Product
              key={key}
              image={data.image}
              description={data.description}
              price={data.price}
            />
          );
        })}
      </ProductsList>
    </MainContainer>
  );
};
