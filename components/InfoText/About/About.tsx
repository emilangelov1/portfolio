import styled from "@emotion/styled";
import React from "react";

type Props = {};

const AboutText = styled.p`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 101px;
  color: ${(props) =>
    props.theme.color.onSurface};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

export default function About({}: Props) {
  return <AboutText>About</AboutText>;
}
