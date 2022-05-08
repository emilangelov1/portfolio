import styled from "@emotion/styled";
import React from "react";

type Props = {};

const ProjectsText = styled.p`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 101px;
  color: ${(props) =>
    props.theme.color.onSurface};
  padding: 50px 0px;
  user-select: none;
`;

export default function Projects({}: Props) {
  return <ProjectsText>Projects</ProjectsText>;
}
