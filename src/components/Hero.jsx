import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import profileImage from '../assets/eu.png'; 

const MainContainer = styled.div`
  max-width: 1200px; 
  width: 100%;
  margin: 0 auto;
`;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  align-items: flex-start;
  align-items: center;
  color: #fff;
  margin-top: 120px;
  font-family: "Chakra Petch", sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ProfileCircle = styled.div`
  width: 174px;
  height: 174px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #fff;

  @media (min-width: 768px) {
    width: 271px;
  height: 271px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) { 
    text-align: left;
    align-items: flex-start;
    width: 30%; 
  }
`;

const Title = styled.h1`
  margin-top: 33px;
  font-size: 32px; 
  font-weight: bold; 
  
  @media (min-width: 768px) {
    font-size: 50px; 
    margin-top: 33px;
  }
`;

const Subtitle = styled.h2`
  margin: 10px 0;
  font-size: 18px;
  font-weight: normal;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-top: 19px;
  }
`;

const DownloadButton = styled.a`
  font-weight: bold;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 20px 20px; 
  margin-top: 30px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FFC84C;
    color: #000;
    border: 1px solid #000;
  }

  @media (min-width: 768px) {
    padding: 20px 20px; 
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 79px;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 28px;
    transition: color 0.3s ease;

    &:hover {
      color: #FFC84C;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;
    font-size: 36px;
    margin-top: 235px;
    
    a {
      font-size: 35px;
    }
  }
`;

export default function Hero() {
  return (
    <MainContainer>
      <HeroContainer>
        <ProfileCircle>
          <ProfileImage src={profileImage} alt="Imagem de perfil de Victória Lopes" />
        </ProfileCircle>
        <InfoContainer>
          <Title>Victória Lopes</Title>
          <Subtitle>Desenvolvedora Front-End</Subtitle>
          <DownloadButton href="/Portfolio/Curriculo.docx" download>DOWNLOAD CV</DownloadButton>
        </InfoContainer>
        <SocialIcons>
          <a href="https://www.linkedin.com/in/victorialopesp/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/VictoriaLopesP" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:victorialpcp@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/5522997230807?text=" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </SocialIcons>
      </HeroContainer>
    </MainContainer>
  );
}
