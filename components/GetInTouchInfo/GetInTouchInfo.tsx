import styled from "@emotion/styled";
import React from "react";

type Props = {};

const SocialsContainer = styled.div`
  display: grid;
  /* flex-direction: row; */
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
`;

const SocialsLink = styled.a`
  font-family: "Helvetica Now Display";
  font-style: normal;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1.2rem;
  color: #0075ff;
  &:hover {
    cursor: pointer;
  }
`;

export default function GetInTouchInfo({}: Props) {
  return (
    <SocialsContainer>
      <SocialsLink>emil.angelov</SocialsLink>
      <SocialsLink>emil.angelov</SocialsLink>
      <SocialsLink>emil.angelov</SocialsLink>
      <SocialsLink>emil.angelov</SocialsLink>
      <SocialsLink>emil.angelov</SocialsLink>
    </SocialsContainer>
  );
}
