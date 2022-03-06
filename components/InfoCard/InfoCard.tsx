import styled from "@emotion/styled";
import React from "react";

type Props = {};

const InfoCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(36, 36, 36, 0.9);
  backdrop-filter: blur(38px);
  border-radius: 11px;
  max-width: 90%;
  width: 720px;
  height: 50%;
`;

const ProfilePhoto = styled.img`
  border: 2px solid yellow;
  height: 110px;
  width: 110px;
  object-fit: contain;
  border-radius: 11px;
  margin-right: 20px;
`;

const Name = styled.p`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const ProfileInfo = styled.p`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;

const CurrentJob = styled.p`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const Workplace = styled.a`
  color: #016fb9;
`;

const LeftInfo = styled.div`
  display: flex;
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoText = styled.p`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
`;

export default function InfoCard({}: Props) {
  return (
    <InfoCardContainer>
      <LeftInfo>
        <ProfilePhoto src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"></ProfilePhoto>
        <Name>
          Emil Angelov
          <ProfileInfo>Front-End Developer</ProfileInfo>
        </Name>
      </LeftInfo>
      <CurrentJob>
        Currently @ <Workplace href="https://www.pabau.com/">Pabau</Workplace>
      </CurrentJob>
      <InfoText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut culpa
        dolorem magnam obcaecati nemo unde perferendis rem possimus earum cumque
        dicta voluptas, reiciendis illum cum dolor, sapiente recusandae qui
        minima non quos ex nisi perspiciatis voluptate quas. Suscipit et,
        similique explicabo modi maxime necessitatibus. Nisi error harum nihil
        debitis tempora?
      </InfoText>
    </InfoCardContainer>
  );
}
