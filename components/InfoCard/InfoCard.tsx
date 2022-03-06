import styled from "@emotion/styled";
import React from "react";

type Props = {};

const InfoCardContainer = styled.div`
  justify-content: space-around;
  align-items: center;
  background: rgba(36, 36, 36, 0.9);
  backdrop-filter: blur(38px);
  border-radius: 11px;
  max-width: 90%;
  width: 720px;
  padding: 2rem;
  margin: 0 auto;
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
  border: solid 1px yellow;
  display: flex;
`;

const TopInfo = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoText = styled.p`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 36px;
  color: #ffffff;
`;

export default function InfoCard({}: Props) {
  return (
    <InfoCardContainer>
      <TopInfo>
        <LeftInfo>
          <ProfilePhoto src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"></ProfilePhoto>
          <Name>
            Emil Angelov
            <ProfileInfo>
              Front-End Developer
            </ProfileInfo>
          </Name>
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
        architecto! Suscipit consectetur,
        voluptatum repellendus hic aut ducimus,
        labore, omnis maiores rerum eligendi
        saepe! Quasi accusantium blanditiis
        aliquam, tenetur natus saepe quas
        excepturi ab nulla ducimus quo quos
        pariatur sit ipsam laboriosam minus est.
        Alias earum repellendus officia itaque
        sit, accusantium totam eveniet
        voluptatibus id odio quam fugit, dolor
        sunt! Impedit minus hic illum eos?
        Deserunt incidunt nulla ducimus adipisci
        voluptatibus assumenda, esse recusandae
        possimus vero obcaecati cum odit suscipit
        beatae voluptate eaque in nesciunt! Ipsam
        eligendi ut minima expedita quaerat illo,
        quos aut consectetur voluptatibus officia
        fuga. Quos perspiciatis quis error ipsam,
        nemo perferendis consequuntur rem sed! In,
        culpa?
      </InfoText>
    </InfoCardContainer>
  );
}
