import styled from "@emotion/styled";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Background from "../components/Background/Background";
import InfoCard from "../components/InfoCard/InfoCard";
import PageHeader from "../components/PageHeader/PageHeader";
import Projects from "../components/InfoText/Projects/Projects";
import AllProjectsContainer from "../components/ProjectsCard/AllProjectsContainer";
import GetInTouchInfo from "../components/GetInTouchInfo/GetInTouchInfo";
import {
  Suspense,
  useEffect,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { LoaderAlt } from "emotion-icons/boxicons-regular";
import { css, Global } from "@emotion/react";
import { useProgress } from "@react-three/drei";

const About = dynamic(
  () =>
    import("../components/InfoText/About/About"),
  { ssr: false }
);

const Loading = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 60px;
  background-color: ${(props) =>
    props.theme.color.background};
  min-height: 100vh;
  min-width: 100vw;
`;

const LoadingCircle = styled(LoaderAlt)`
  color: ${(props) =>
    props.theme.color.onSurface};
  width: 75px;
  height: 75px;
`;

const LoadingComponent = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "absolute",
        zIndex: 100,
      }}
    >
      <Loading
        initial={{ opacity: 1 }}
        transition={{
          bounce: 1,
          type: "spring",
          stiffness: 50,
          delay: 1,
        }}
        animate={{ opacity: [1, 0] }}
        exit={{ display: "none" }}
      >
        <motion.div
          animate={{ scale: [0, 1.2, 0.8, 1] }}
          transition={{
            duration: 0.8,
            bounce: 1,
            type: "string",
            damping: 1,
          }}
          exit={{ opacity: [1, 0] }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              bounce: 1,
              type: "string",
              stiffness: 10,
            }}
            exit={{ opacity: [1, 0] }}
          >
            <LoadingCircle />
          </motion.div>
        </motion.div>
      </Loading>
    </div>
  );
};

const Home: NextPage = () => {
  const { loaded } = useProgress();
  return (
    <>
      <Global
        styles={
          !loaded &&
          css`
            * {
              overflow: hidden;
            }
          `
        }
      />

      <AnimatePresence initial>
        {!loaded && <LoadingComponent />}
      </AnimatePresence>

      <Suspense fallback={null}>
        <PageHeader />
        <Background>
          <About />
          <InfoCard></InfoCard>
          <Projects />
          <AllProjectsContainer />
          {/* <GetInTouchInfo/> */}
        </Background>
      </Suspense>
    </>
  );
};

export default Home;
