import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import projectImage1 from '../assets/img-pokedex.png'; 
import projectImageDesktop from '../assets/img-pokedex-desktop.png';

const ProjectsSection = styled.section`
  max-width: 1256px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 32px;
  font-family: 'Titillium Web', sans-serif;
  color: #fff;
  margin-top: 50px;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 32px;
    color: #fff;
    font-family: "Chakra Petch", sans-serif;
    width: 24%;

    @media (min-width: 768px) {
      font-size: 50px;
      margin-top: 80px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr;
  gap: 50px;
  margin-top: 80px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    width: 50%;
  }
`;

export default function Projetos() {
  return (
    <ProjectsSection>
      <h2>Projetos_</h2>
      <ProjectsGrid>
        <ProjectCard 
          imgSmall={projectImage1} 
          imgLarge={projectImageDesktop} 
          title="Pokédex"
          description="Projeto feito com HTML, CSS e Javascript, consumindo API."
          liveLink="https://link-pokedex.com" 
          githubLink="https://github.com/seu-usuario/pokedex"
        />
      </ProjectsGrid>
    </ProjectsSection>
  );
}
