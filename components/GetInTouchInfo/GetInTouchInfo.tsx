import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Github,
  InstagramAlt,
  Linkedin,
} from "emotion-icons/boxicons-logos";
import React from "react";

type Props = {
  span?: boolean;
};

const SocialsContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  row-gap: 50px;
  column-gap: 200px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  & :last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SocialsLink = styled.a<Props>`
  ${(props) =>
    props.span
      ? css`
          grid-column: 1 / span 2;
        `
      : null};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Helvetica Now Display";
  font-style: normal;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1.2rem;
  color: ${(props) => props.theme.color.primary};
  & :first-of-type {
    width: 24px;
    margin: 0px 10px 0px 0px;
    backdrop-filter: blur(50px);
    color: ${(props) =>
      props.theme.color.onSurface};
  }
  &:hover {
    cursor: pointer;
  }
`;

const PoweredByContainer = styled.p`
  font-family: "Helvetica Now Display";
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
  line-height: 22px;
  text-align: center;
  color: ${(props) =>
    props.theme.color.onSurface};
  margin: 50px;
`;

export default function GetInTouchInfo({}: Props) {
  return (
    <>
      <SocialsContainer>
        <SocialsLink href="https://github.com/emilangelov1">
          <Github />
          @emil.angelov
        </SocialsLink>
        <SocialsLink href="https://www.linkedin.com/in/emil-angelov-997730230/">
          <Linkedin />
          @emil.angelov
        </SocialsLink>
        <SocialsLink
          span
          href="https://www.instagram.com/emil___angelov/"
        >
          <InstagramAlt />
          @emil.angelov
        </SocialsLink>
      </SocialsContainer>
      <PoweredByContainer>
        © 2022 Emil Angelov. All Rights Reserved.
        <br />
        Powered by Next.js, React and Vercel
      </PoweredByContainer>
    </>
  );
}
