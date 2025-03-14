import React from 'react';
import styled from 'styled-components';
import gifPixel from '../assets/gif-pixel.gif';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #1E1E1E;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 1000px;
  max-height: 800px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: white;
  position: relative;
  overflow-y: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  z-index: 10;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza o conteúdo */
  justify-content: flex-start; /* Garante que o conteúdo fique alinhado ao topo */
  text-align: center; /* Centraliza o texto */
  width: 100%; /* Faz com que o contêiner ocupe toda a largura */
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  max-width: 100%; /* Garante que o título ocupe toda a largura disponível */
  white-space: normal; /* Permite que o texto quebre de linha se necessário */
`;

const Description = styled.p`
  font-size: 16px;
  color: white;
  margin-top: 15px;
  line-height: 1.5;
  max-width: 350px; /* Define uma largura máxima para a descrição */
  word-wrap: break-word; /* Evita que o texto ultrapasse a largura definida */
`;

const GifImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: contain;
  border-radius: 5px;
`;

const LinksContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  
  a {
    color: #26A69A;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
  }
`;

export default function Modal({ onClose }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>✖</CloseButton>

        <LeftContainer>
          <Title>Pixel</Title>
          <Description>
            Entre outubro e dezembro de 2024, tive a oportunidade de trabalhar como freelancer em um projeto desafiador e gratificante para uma startup fintech. 
            O objetivo era desenvolver um MVP (Minimum Viable Product) usando React Native, e o resultado foi um aplicativo voltado para microempreendedores, 
            com foco em simplificar e automatizar sua vida financeira.
          </Description>

          <Description>
          From October to December 2024, I had the opportunity to work as a freelancer on a challenging and rewarding project for a fintech startup. 
          The goal was to develop an MVP (Minimum Viable Product) using React Native, and the result was an app designed to help micro-entrepreneurs 
          simplify and automate their financial lives.
          </Description>

          <LinksContainer>
            <a href="https://github.com/VictoriaLopesP/Pixel" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </LinksContainer>
        </LeftContainer>

        <GifImage src={gifPixel} alt="Projeto Pixel em funcionamento" />
      </ModalContent>
    </ModalOverlay>
  );
}
