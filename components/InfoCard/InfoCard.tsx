import styled from "@emotion/styled";
import React from "react";

type Props = {};

const InfoCardContainer = styled.div`
  justify-content: space-around;
  align-items: center;
  background: ${(props) =>
    props.theme.color.surface};
  backdrop-filter: blur(38px);
  border-radius: 11px;
  max-width: 90%;
  width: 720px;
  padding: 2rem;
  margin: 0 auto;
  user-select: none;
`;

const ProfilePhoto = styled.img`
  height: 110px;
  width: 110px;
  object-fit: contain;
  border-radius: 11px;
  margin-right: 20px;
`;

const Name = styled.p`
  display: block;
  width: 100%;
  text-align: start;
  flex: 2;
  font-family: Helvetica Now Display;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  color: ${(props) =>
    props.theme.color.onSurface};
`;

const ProfileInfo = styled.p`
  display: block;
  width: 100%;
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

const CurrentJob = styled.p`
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
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
  display: flex;
  margin: 0 auto;
  flex: 1;
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InfoText = styled.p`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 36px;
  color: ${(props) =>
    props.theme.color.onSurface};
`;

export default function InfoCard({}: Props) {
  return (
    <InfoCardContainer>
      <TopInfo>
        <LeftInfo>
          <ProfilePhoto src="https://media-exp1.licdn.com/dms/image/C4D03AQElcv4AbozhWw/profile-displayphoto-shrink_800_800/0/1650489006908?e=1657756800&v=beta&t=zA0RtHtDfyDAitkQognjwUVmMEMzJwZN5FnJYNhRytQ"></ProfilePhoto>
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
        architecto!
      </InfoText>
    </InfoCardContainer>
  );
}
