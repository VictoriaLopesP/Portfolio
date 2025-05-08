import React from 'react';
import styled from 'styled-components';
import veraGif from '../assets/Veragif.gif'; 

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
  flex: 1; /* Vai usar o máximo de espaço disponível */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 0 20px;
`;



const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  white-space: nowrap;
  align-self: flex-start;
  text-align: left;
  padding-left: 100px;
`;


const Description = styled.p`
  font-size: 18px;
  color: white;
  margin-top: 15px;
  line-height: 1.5;
  max-width: 350px;
  word-wrap: break-word;
`;

const GifImage = styled.img`
  width: 100%;
  max-width: 350px;
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

export default function VeraModal({ onClose }) {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>✖</CloseButton>

        <LeftContainer>
          <Title>Vera Assistent</Title>
          <Description>
          Vera é um assistente virtual desenvolvido com HTML, CSS e JavaScript, integrando tecnologias de reconhecimento de voz (Speech Recognition) e 
          conversão de texto em fala (Text-to-Speech) para uma experiência interativa e acessível. 
          </Description>

          <Description>
          O projeto foi construído com Cordova e Framework7, permitindo sua execução como aplicativo mobile híbrido. A inteligência artificial é alimentada pela 
          API da OpenAI, possibilitando respostas naturais e dinâmicas em tempo real. 
          </Description>

          <LinksContainer>
            <a href="https://github.com/VictoriaLopesP/VeraAssistent" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </LinksContainer>
        </LeftContainer>

        <GifImage src={veraGif} alt="Vera Assistent em funcionamento" />
      </ModalContent>
    </ModalOverlay>
  );
}
