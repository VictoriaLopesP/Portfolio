import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  max-width: 1256px;
  width: 100%;
  padding: 60px 32px;
  margin: 0 auto;
  color: #fff;
  display: flex;
  flex-direction: column; 
  text-align: left;
  margin-top: 50px;
  font-family: "Titillium Web";

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 150px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 80px;
  color: #fff;
  font-family: "Chakra Petch", sans-serif;
  width: 100%; 
  
  @media (min-width: 768px) {
    font-size: 46px;
    width: 75%;
  }
`;

const Text = styled.p`
  font-size: 18px; 
  line-height: 26px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <Title>Sobre mim_</Title>
      <Text>
        Início de carreira, crio experiências web interativas e responsivas. 
        <br /><br />
        Quero crescer como desenvolvedora front-end, contribuindo para projetos significativos e criando soluções que tornem a experiência do usuário mais rica e envolvente.
      </Text>
    </AboutContainer>
  );
}
