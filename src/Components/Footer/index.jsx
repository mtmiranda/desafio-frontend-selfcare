import React from "react";
import styled from "styled-components";
import {
  footerborderColor,
  inputBorderColor,
  secondaryColor,
  whiteText,
} from "../UI/variaveis";

export const ContainerFooter = styled.footer`
  padding-top: 35px;
  border-top: 0.2px solid ${footerborderColor};
`;

export const FooterContent = styled.section`
  display: flex;
  justify-content: space-between;
  width: 95%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1366px) {
    width: 85%;
    margin: 0 30px;
  }
`;

export const FooterOptions = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5rem;
  margin: 0px 30px;
`;

export const Newsletter = styled.div`
  @media (max-width: 768px) {
    padding: 28px;
    display: flex;
    flex-direction: column;
  }
`;

export const InputNewsletter = styled.input`
  border: 0.5px solid ${inputBorderColor};
  border-radius: 5px 0px 0px 5px;
  padding: 10px;
  margin: 10px 0;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonInput = styled.button`
  color: ${whiteText};
  background-color: ${secondaryColor};
  border: none;
  height: 37px;
  padding: 10px 20px;
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const BottomIcons = styled.section`
  display: flex;
  justify-content: space-between;
  border-top: 0.2px solid ${footerborderColor};
  margin-top: 45px;
  align-items: center;
`;

export const SocialMedia = styled.div`
  margin: 20px;
  @media (min-width: 1366px) {
    margin: 20px 50px;
  }
`;

export const IconsMedia = styled.img`
  margin-right: 20px;
  width: 33.48px;
  height: 33.48px;
`;

export const Payment = styled.div`
  margin: 20px;
  @media (min-width: 1366px) {
    margin: 20px 50px;
  }
`;

export const IconsPayment = styled.img`
  width: 56.33px;
  height: 43.71px;
  margin-right: 10px;
`;

export const Footer = () => {
  return (
    <ContainerFooter>
      <FooterContent>
        <FooterOptions>
          <a href="/#">Contato</a>
          <a href="/#">Termos de serviço</a>
          <a href="/#">Política de privacidade</a>
          <a href="/#">Cancelamento, troca e reembolso</a>
        </FooterOptions>
        <Newsletter>
          <label for="email">
            Newsletter
            <br />
          </label>
          <InputNewsletter
            type="email"
            name="email"
            placeholder="Digite seu melhor e-mail"
          />
          <ButtonInput>Inscrever</ButtonInput>
        </Newsletter>
      </FooterContent>
      <BottomIcons>
        <SocialMedia>
          <IconsMedia src={`Icons/instagram.svg`} />
          <IconsMedia src={`Icons/facebook.svg`} />
        </SocialMedia>
        <Payment>
          <IconsPayment src={`Icons/payment.svg`} />
          <IconsPayment src={`Icons/payment2.svg`} />
          <IconsPayment src={`Icons/payment3.svg`} />
        </Payment>
      </BottomIcons>
    </ContainerFooter>
  );
};
