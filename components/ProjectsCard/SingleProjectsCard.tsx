import styled from "@emotion/styled";
import Color from "color";
import React from "react";

type Props = {
  title: string;
};

const ProjectsContainer = styled.div`
  flex-wrap: wrap;
  min-width: 276px;
  min-height: 346px;
  background: ${(props) =>
    props.theme.color.surface};
  backdrop-filter: blur(30px);
  border-radius: 21px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 0px 0px 100px -15px rgba(0, 0, 0, 0.6);
  }
`;

const ProjectsImage = styled.img`
  background: rgba(36, 36, 36, 0.9);
  backdrop-filter: blur(50px);
  border-radius: 21px;
  width: 100%;
  max-height: 265px;
  object-fit: cover;
`;

const ProjectTitle = styled.p`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
  padding: 0px 0px 0px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* line-height: 22px; */
  color: ${(props) =>
    props.theme.color.onSurface};
  max-width: 90%;
  width: 10rem;
`;

export default function ProjectsCard({
  title,
  ...props
}: Props) {
  return (
    <ProjectsContainer {...props}>
      <ProjectsImage src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80" />
      <ProjectTitle>{title}</ProjectTitle>
    </ProjectsContainer>
  );
}
