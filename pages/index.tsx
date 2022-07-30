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
import { motion } from "framer-motion";
import { LoaderAlt } from "emotion-icons/boxicons-regular";
import { css, Global } from "@emotion/react";

const About = dynamic(
  () =>
    import("../components/InfoText/About/About"),
  { ssr: false }
);

const Loading = styled(motion.div)`
  position: absolute;
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
  position: relative;
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
        animate={{
          opacity: [1, 1, 1, 1, 0],
        }}
        transition={{
          duration: 7,
          bounce: 1,
          type: "spring",
          stiffness: 50,
        }}
      >
        <motion.div
          animate={{ scale: [0, 1.2, 0.8, 1] }}
          transition={{
            duration: 0.8,
            bounce: 1,
            type: "string",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 0.7,
              repeat: Infinity,
              repeatType: "loop",
              bounce: 1,
              type: "string",
              stiffness: 10,
            }}
          >
            <LoadingCircle />
          </motion.div>
        </motion.div>
      </Loading>
    </div>
  );
};

const EmotionProp = styled(Global)<{
  loading: boolean;
}>`
  ${(props) => {
    if (props.loading) {
      return css`
        body {
          overflow: hidden;
        }
      `;
    }
    return css``;
  }}
`;

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  setInterval(() => setLoading(false), 8000);
  return (
    <>
      <EmotionProp
        loading={loading}
        styles={
          loading &&
          css`
            * {
              overflow: hidden;
            }
          `
        }
      />
      {loading && <LoadingComponent />}
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
