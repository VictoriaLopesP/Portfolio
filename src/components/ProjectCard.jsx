import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal"; 
import VeraModal from "./VeraModal";

const Card = styled.div`
  width: 350px;
  height: 460px;
  background-color: #333;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    width: 744px;
    height: 640px;
  }
`;

const Image = styled.img`
  width: 350px;
  height: 250px;

  @media (min-width: 768px) {
    width: 744px;
    height: 450px;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  margin: 16px 0;
  color: #fff;
  padding-left: 15px;
`;

const Description = styled.p`
  font-size: 16px;
  padding: 0 16px;
  margin-bottom: 16px;
  color: #bbb;
  text-align: left;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  padding-right: 20px;
  margin-left: auto;
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #FFC84C;
  color: #333;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
    color: #ffc84c;
  }
`;

export default function ProjectCard({ 
  title, 
  description, 
  liveLink, 
  githubLink, 
  imgSmall, 
  imgLarge, 
  useModal = false 
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewProject = () => {
    if (useModal) {
      setModalOpen(true);
    } else if (liveLink) {
      window.open(liveLink, "_blank");
    }
  };

  return (
    <Card>
      <Image src={imgSmall} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Buttons>
        <Button onClick={handleViewProject}>Ver Projeto</Button>
        <Button as="a" href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </Button>
      </Buttons>

      {useModal && modalOpen && (title === "Pixel" ? <Modal onClose={() => setModalOpen(false)} /> : <VeraModal onClose={() => setModalOpen(false)} />)}
    </Card>
  );
}
