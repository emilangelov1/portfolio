import styled from "@emotion/styled";
import React from "react";
import { SunFill } from "@emotion-icons/bootstrap/SunFill";
import { useStore } from "../../themes";
import Color from "color";

type Props = {};

const HeaderContaner = styled.div`
  position: fixed;
  border: 1px solid #313131;
  background: ${(props) =>
    Color(props.theme.color.background)
      .alpha(0.7)
      .toString()};
  backdrop-filter: blur(18px);
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const TextContainer = styled.div`
  height: 100%;
  max-width: 90%;
  width: 720px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: solid 2px yellow; */
`;

const Name = styled.p`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
  line-height: 22px;
  color: ${(props) =>
    props.theme.color.onSurface};
`;

const InfoTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  max-width: 320px;
  height: 60%;
  /* border: 1px solid red; */
`;

const InfoText = styled.a`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 19px;
  color: ${(props) =>
    props.theme.color.onSurface};
  &:hover {
    cursor: pointer;
  }
`;

const ModeButton = styled.button`
  border: 4px solid green;
  background: ${(props) =>
    props.theme.color.darkerSurface};
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 6px;
  color: ${(props) =>
    props.theme.color.onSurface};
  &:hover {
    cursor: pointer;
  }
`;

const WhiteSunFill = styled(SunFill)`
  color: white;
`;

export default function PageHeader({}: Props) {
  const { toggleTheme } = useStore();
  return (
    <HeaderContaner>
      <TextContainer>
        <Name>Emil Angelov</Name>
        <InfoTab>
          <InfoText>About</InfoText>
          <InfoText>Projects</InfoText>
          <InfoText href="https://github.com/emilangelov1">
            Github
          </InfoText>
          <ModeButton
            onClick={() => toggleTheme()}
          >
            <WhiteSunFill />
          </ModeButton>
        </InfoTab>
      </TextContainer>
    </HeaderContaner>
  );
}
