import styled from "@emotion/styled";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Background from "../components/Background/Background";
import InfoCard from "../components/InfoCard/InfoCard";
import PageHeader from "../components/PageHeader/PageHeader";
import Projects from "../components/InfoText/Projects/Projects";
import AllProjectsContainer from "../components/ProjectsCard/AllProjectsContainer";
import GetInTouchInfo from "../components/GetInTouchInfo/GetInTouchInfo";

const About = dynamic(
  () =>
    import("../components/InfoText/About/About"),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <>
      <PageHeader />
      <Background>
        <About />
        <InfoCard></InfoCard>
        <Projects />
        <AllProjectsContainer />
        {/* <GetInTouchInfo></GetInTouchInfo> */}
      </Background>
    </>
  );
};

export default Home;
