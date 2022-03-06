import styled from "@emotion/styled";
import React from "react";
import { SunFill } from "@emotion-icons/bootstrap/SunFill";

type Props = {};

const HeaderContaner = styled.div`
  position: absolute;
  background: rgba(29, 29, 29, 0.8);
  border: 1px solid #313131;
  backdrop-filter: blur(18px);
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
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
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const ModeButton = styled.button`
  border: 4px solid green;
  background: #141414;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 6px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const WhiteSunFill = styled(SunFill)`
  color: white;
`;

export default function PageHeader({}: Props) {
  return (
    <HeaderContaner>
      <TextContainer>
        <Name>Emil Angelov</Name>
        <InfoTab>
          <InfoText>About</InfoText>
          <InfoText>Projects</InfoText>
          <InfoText>Github</InfoText>
          <ModeButton>
            <WhiteSunFill />
          </ModeButton>
        </InfoTab>
      </TextContainer>
    </HeaderContaner>
  );
}
