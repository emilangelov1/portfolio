import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

type Cards = {
  title: string;
  key: number;
  css?: SerializedStyles;
};

export type CardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Cards;

const MobileProjectsContainer = styled.div`
  flex-wrap: wrap;
  min-width: 138px;
  min-height: 173px;
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

export default function MobileProjectsCard({
  title,
  key,
  ...props
}: CardProps) {
  return (
    <MobileProjectsContainer {...props}>
      <ProjectsImage src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80" />
      <ProjectTitle>{title}</ProjectTitle>
    </MobileProjectsContainer>
  );
}
