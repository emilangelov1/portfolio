import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Background from "../components/Background/Background";
import InfoCard from "../components/InfoCard/InfoCard";
import PageHeader from "../components/PageHeader/PageHeader";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <PageHeader />
      <Background>
        <InfoCard></InfoCard>
      </Background>
    </>
  );
};

export default Home;
