import styled from "@emotion/styled";
import React from "react";
import ProjectsCard from "./SingleProjectsCard";

type Props = {};

const AllProjectsDiv = styled.div`
  display: flex;
  border: solid 2px yellow;
  overflow: hidden;
  justify-content: center;
  align-content: center;
  /* margin: 50px; */
  /* width: 50%; */
`;

const LeftButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  border: none;
  background: #393939;
  &:hover {
    cursor: pointer;
  }
`;

const RightButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  border: none;
  background: #393939;
  align-items: space-around;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 120px;
  border: 1px solid red;
  margin: 20px 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export default function AllProjectsContainer({}: Props) {
  return (
    <Container>
      <ButtonContainer>
        <LeftButton></LeftButton>
        <RightButton></RightButton>
      </ButtonContainer>
      <AllProjectsDiv>
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </AllProjectsDiv>
    </Container>
  );
}
