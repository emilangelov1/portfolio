import styled from "@emotion/styled";
import type { NextPage } from "next";
import About from "../components/InfoText/About/About";
import Background from "../components/Background/Background";
import InfoCard from "../components/InfoCard/InfoCard";
import PageHeader from "../components/PageHeader/PageHeader";
import Projects from "../components/InfoText/Projects/Projects";
import AllProjectsContainer from "../components/ProjectsCard/AllProjectsContainer";
import GetInTouchInfo from "../components/GetInTouchInfo/GetInTouchInfo";

const Home: NextPage = () => {
  return (
    <>
      <PageHeader />
      <Background>
        <div style={{ paddingTop: 150 }}>
          <About />
          <InfoCard></InfoCard>
        </div>
        <div style={{ paddingTop: 150 }}>
          <Projects />
          <AllProjectsContainer />
        </div>
        <div style={{ paddingTop: 150 }}>
          <GetInTouchInfo></GetInTouchInfo>
        </div>
      </Background>
    </>
  );
};

export default Home;
