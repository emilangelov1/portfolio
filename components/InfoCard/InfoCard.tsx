import styled from "@emotion/styled";
import React from "react";

type Props = {};

const InfoCardContainer = styled.div`
  @media only screen and (max-width: 500px) {
    padding: 1rem;
    min-width: 120%;
  }
  transition: all 0.2s ease-in-out;
  background: ${(props) =>
    props.theme.color.surface};
  backdrop-filter: blur(10px);
  border-radius: 11px;
  max-width: 90%;
  width: 720px;
  padding: 2rem;
  user-select: none;
  bottom: 150px;
  position: relative;
`;

const ProfilePhoto = styled.img`
  transition: all 0.2s ease-in-out;
  position: relative;
  display: flex;
  height: 110px;
  width: 110px;
  @media only screen and (max-width: 580px) {
    max-width: 110px;
    max-height: 110px;
    overflow: hidden;
  }
  object-fit: cover;
  border-radius: 11px;
  margin-right: 20px;
`;

const Name = styled.p`
  transition: all 0.2s ease-in-out;
  display: block;
  position: relative;
  text-overflow: ellipsis;
  overflow: hidden;
  @media only screen and (max-width: 580px) {
    text-align: center;
  }
  margin: 0;
  max-width: 100%;
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: ${(props) =>
    props.theme.color.onSurface};
`;

const ProfileInfo = styled.p`
  transition: all 0.2s ease-in-out;
  position: relative;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  @media only screen and (max-width: 580px) {
    text-align: center;
  }
  max-width: 100%;
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) =>
    props.theme.color.onSurface};
  margin: 0;
  padding: 0;
`;

const CurrentJob = styled.div`
  transition: all 0.2s ease-in-out;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: end;
  @media only screen and (max-width: 580px) {
    text-align: center;
  }
  width: 50%;
  font-family: Helvetica Now Display;
  min-width: 0px;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 20px;
  color: ${(props) =>
    props.theme.color.onSurface};
`;

const Workplace = styled.a`
  color: ${(props) => props.theme.color.primary};
`;

const LeftInfo = styled.div`
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  flex: 2;
  @media only screen and (max-width: 580px) {
    max-width: fit-content;
  }
`;

const TopInfo = styled.div`
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

const InfoText = styled.p`
  transition: all 0.2s ease-in-out;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 36px;
  color: ${(props) =>
    props.theme.color.onSurface};
`;

const NameContainer = styled.div`
  transition: all 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: auto;
  width: 100%;
`;

export default function InfoCard({}: Props) {
  return (
    <InfoCardContainer>
      <TopInfo>
        <LeftInfo>
          <ProfilePhoto src="https://media-exp1.licdn.com/dms/image/C4D03AQElcv4AbozhWw/profile-displayphoto-shrink_800_800/0/1650489006908?e=1664409600&v=beta&t=cCJo7XgUjqCoB9TR7uq2aRLarjLnYYcIOQSaAYJEONg"></ProfilePhoto>
          <NameContainer>
            <Name>Emil Angelov</Name>
            <ProfileInfo>
              Front-End Developer
            </ProfileInfo>
          </NameContainer>
        </LeftInfo>
        <CurrentJob>
          Currently @{" "}
          <Workplace href="https://www.pabau.com/">
            Pabau
          </Workplace>
        </CurrentJob>
      </TopInfo>
      <InfoText>
        Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Officia earum iste
        voluptatem, illo nesciunt vero adipisci
        ullam obcaecati recusandae atque voluptas
        sed numquam quisquam labore nihil magni
        similique! Laudantium, quasi adipisci
        maxime, voluptatum autem aliquid quo
        reiciendis fugiat quia porro qui
        reprehenderit, minima repellendus odio.
        Veritatis, maiores laudantium quis magni
        tempore soluta, necessitatibus in
        architecto obcaecati aliquid a officiis
        ipsum fugit voluptate modi exercitationem
        quia. Hic enim porro quidem reprehenderit
        inventore iure animi excepturi qui
        consectetur amet pariatur dolor, dolorum
        deleniti dignissimos alias dicta nesciunt,
        vitae aspernatur quod vel mollitia.
        Aliquid totam odit earum unde quo eligendi
        voluptatem, est necessitatibus aspernatur
        commodi quam doloribus quaerat repudiandae
        deleniti amet! Animi nisi corporis
        doloremque fugit perferendis fuga
        voluptatum voluptas modi accusamus eius
        ipsum aperiam ratione magnam, cumque
        maiores neque officiis? Est excepturi
        aperiam perspiciatis esse eaque beatae
        dicta, aut aliquid soluta aspernatur magni
        quibusdam ea officia quidem consequatur
        saepe error repudiandae facilis
        architecto!
      </InfoText>
    </InfoCardContainer>
  );
}
