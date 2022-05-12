import styled from "@emotion/styled";
import {
  ArrowIosBackOutline,
  ArrowIosForwardOutline,
} from "emotion-icons/evaicons-outline";
import React, { useState } from "react";
import { projects } from "./projects/projects";
import ProjectsCard from "./SingleProjectsCard";
import {
  useSpring,
  animated,
} from "react-spring";

type Props = {};

const AllProjectsDiv = styled(animated.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  gap: 120px;
  width: 100%;
  user-select: none;
`;

const LeftButton = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  border: none;
  background: ${(props) =>
    props.theme.color.buttonContainer};
  transition: all 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 0px 40px -15px rgba(0, 0, 0, 0.8);
  }
`;

const RightButton = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  border: none;
  background: ${(props) =>
    props.theme.color.buttonContainer};
  align-items: space-around;
  transition: all 0.4s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 0px 0px 40px -15px rgba(0, 0, 0, 0.8);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  margin: 0px 0px 50px 0px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 720px;
`;

const LeftArrow = styled(ArrowIosBackOutline)`
  color: white;
`;

const RightArrow = styled(ArrowIosForwardOutline)`
  color: white;
`;

export default function AllProjectsContainer({}: Props) {
  let [counter, setCounter] = useState(0);
  const [projectState, setProjectState] =
    useState(0);
  const props = useSpring({
    right: projectState,
  });
  const forwardClickHandler = () => {
    setProjectState(projectState + 396);
    setCounter((counter += 1));
    if (counter >= Object.keys(projects).length) {
      setCounter(0);
      setProjectState(0);
    }
  };
  const backwardClickHandler = () => {
    if (projectState < 1) {
      setProjectState(0);
    } else {
      setProjectState(projectState - 396);
      setCounter((counter -= 1));
    }
  };
  console.log(counter);
  return (
    <Container>
      <ButtonContainer>
        <LeftButton
          onClick={backwardClickHandler}
        >
          <LeftArrow />
        </LeftButton>
        <RightButton
          onClick={forwardClickHandler}
        >
          <RightArrow />
        </RightButton>
      </ButtonContainer>
      <AllProjectsDiv
        style={{ right: props.right }}
      >
        {Object.keys(projects).map((project) => {
          return (
            <ProjectsCard
              key={project}
              title={project}
            ></ProjectsCard>
          );
        })}
      </AllProjectsDiv>
    </Container>
  );
}
