import { css } from "@emotion/react";
import type { NextPage } from "next";
import Background from "../components/Background/Background";
import InfoCard from "../components/InfoCard/InfoCard";
import PageHeader from "../components/PageHeader/PageHeader";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <PageHeader />
      <Background>
        <div style={{ paddingTop: 300 }}>
          <InfoCard></InfoCard>
        </div>
      </Background>
    </>
  );
};

export default Home;
