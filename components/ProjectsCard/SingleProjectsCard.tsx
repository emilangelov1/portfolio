import styled from "@emotion/styled";
import React from "react";

type Props = {};

const ProjectsContainer = styled.div`
  flex-wrap: wrap;
  max-width: 90%;
  background: rgba(36, 36, 36, 0.9);
  backdrop-filter: blur(30px);
  border-radius: 21px;
  margin: 0px 1.3rem;
  border: 1px solid red;
`;

const ProjectsImage = styled.img`
  background: rgba(36, 36, 36, 0.9);
  backdrop-filter: blur(50px);
  border-radius: 21px;
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

const ProjectTitle = styled.p`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  /* line-height: 22px; */
  color: #ffffff;
  max-width: 90%;
  width: 10rem;
`;

export default function ProjectsCard({}: Props) {
  return (
    <ProjectsContainer>
      <ProjectsImage src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80" />
      <ProjectTitle>Project Title</ProjectTitle>
    </ProjectsContainer>
  );
}
