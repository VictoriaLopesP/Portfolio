import React from 'react';
import styled from 'styled-components';
import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import javascript from '../assets/javascript.svg';
import typescript from '../assets/typescript.svg';
import react from '../assets/react.svg';
import figma from '../assets/figma.svg';
import reactnative from '../assets/reactnative.svg';

const SkillsContainer = styled.section`
  max-width: 1256px;
  width: 100%;
  padding: 0px 32px;
  margin: 0 auto;
  color: #fff;
  font-family: "Titillium Web";
  margin-top: 50px;
  display: flex;
  flex-direction: column; 
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row; 
    align-items: flex-start;
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
    width: 37%;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(163px, 1fr));
  gap: 18px;
  justify-items: flex-start;
  flex: 2; 

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillImage = styled.img`
  width: 163px;
  height: 193px;
  object-fit: contain;


`;

export default function Skills() {
  return (
    <SkillsContainer>
      <Title>Habilidades_</Title>
      <SkillsGrid>
        <SkillImage src={html5} alt="HTML5" />
        <SkillImage src={css3} alt="CSS3" />
        <SkillImage src={javascript} alt="JavaScript" />
        <SkillImage src={typescript} alt="TypeScript" />
        <SkillImage src={react} alt="React" />
        <SkillImage src={figma} alt="Figma" />
        <SkillImage src={reactnative} alt="React Native" />
      </SkillsGrid>
    </SkillsContainer>
  );
}
