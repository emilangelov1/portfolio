import styled from "@emotion/styled";
import {
  ArrowIosBackOutline,
  ArrowIosForwardOutline,
} from "emotion-icons/evaicons-outline";
import React, {
  useEffect,
  useState,
} from "react";
import { projects } from "./projects/projects";
import ProjectsCard, {
  CardProps,
} from "./SingleProjectsCard";
import {
  useSpring,
  animated,
} from "react-spring";
import MobileProjectsCard from "./MobileProjectsCard";
import { motion } from "framer-motion";
import { ScaleHover } from "../PageHeader/PageHeader";

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

const MobileAllProjectsDiv = styled(animated.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  gap: 60px;
  width: 100%;
  user-select: none;
`;

const LeftButton = styled(motion.a)`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  border: none;
  background: ${(props) =>
    props.theme.color.buttonContainer};
  &:hover {
    cursor: pointer;
  }
`;

const RightButton = styled(motion.a)`
  width: 48px;
  height: 48px;
  border-radius: 5px;
  border: none;
  background: ${(props) =>
    props.theme.color.buttonContainer};
  align-items: space-around;
  &:hover {
    cursor: pointer;
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
  const MobileForwardClickHandler = () => {
    setProjectState(projectState + 198);
    setCounter((counter += 1));
    if (counter >= Object.keys(projects).length) {
      setCounter(0);
      setProjectState(0);
    }
  };
  const MobileBackwardClickHandler = () => {
    if (projectState < 1) {
      setProjectState(0);
    } else {
      setProjectState(projectState - 198);
      setCounter((counter -= 1));
    }
  };
  return (
    <Container>
      <ButtonContainer>
        <LeftButton
          whileHover={{
            scale: 1.1,
            boxShadow:
              "0px 0px 25px -3px rgba(0, 0, 0, 0.2)",
          }}
          transition={{
            bounce: 0.4,
            type: "spring",
            duration: 0.6,
          }}
          onClick={backwardClickHandler}
        >
          <LeftArrow />
        </LeftButton>
        <RightButton
          whileHover={{
            scale: 1.1,
            boxShadow:
              "0px 0px 25px -3px rgba(0, 0, 0, 0.2)",
          }}
          transition={{
            bounce: 0.4,
            type: "spring",
            duration: 0.6,
          }}
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
              key={counter}
              title={project}
            ></ProjectsCard>
          );
        })}
      </AllProjectsDiv>
    </Container>
  );
}
