import React from "react";
import styled from "styled-components";
import banner from "../../assets/banner.png";
import bannerMob from "../../assets/banner-mobile.png";

export const ContainerHeader = styled.header`
  width: 100%;
  height: auto;
`;

export const TopContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 50px;
`;

const Logo = styled.div`
  display: flex;
  margin: 30px;

  h3 {
    margin-left: 5px;
  }
`;

const ImgLogo = styled.img`
  height: 19.81px;
  width: 18.94px;
`;

const MenuIcons = styled.div`
  margin: 30px 50px;
`;

const Icons = styled.img`
  width: 16.2px;
  height: 16.2px;
  display: inline-block;
  margin-left: 20px;
  cursor: pointer;
`;

const Banner = styled.div`
  background-image: url(${banner});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 365px;

  @media (max-width: 768px) {
    background-image: url(${bannerMob});
    width: 100%;
  }
`;

export const Header = () => {
  return (
    <ContainerHeader>
      <TopContainer>
        <Logo>
          <ImgLogo src={`Icons/star.svg`} />
          <h3>selfcare</h3>
        </Logo>
        <MenuIcons>
          <Icons src={`Icons/search.svg`}></Icons>
          <Icons src={`Icons/people.svg`}></Icons>
          <Icons src={`Icons/cart.svg`}></Icons>
        </MenuIcons>
      </TopContainer>
      <Banner></Banner>
    </ContainerHeader>
  );
};
