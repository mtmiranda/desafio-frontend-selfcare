import React from "react";
import styled from "styled-components";
import { secondaryColor } from "../UI/variaveis";

export const ProductCard = styled.div`
  margin-top: 40px;

  span {
    margin: 5px 0;
    color: ${secondaryColor};
  }
`;

ProductCard.Image = styled.img`
  width: 303px;
  height: 303px;
`;
ProductCard.Text = styled.div`
  margin: 10px 0;

  p {
    line-height: 1.6;
  }
`;

export const Product = ({ image, description, price }) => {
  return (
    <ProductCard>
      <ProductCard.Image src={image} alt="Produtos" />
      <ProductCard.Text>
        <p>{description}</p>
        <p>
          R$ <span>{price}</span>
        </p>
      </ProductCard.Text>
    </ProductCard>
  );
};
