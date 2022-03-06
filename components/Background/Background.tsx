import styled from "@emotion/styled";
import React from "react";

type Props = {};

const BackgroundColor = styled.div`
  background-color: #1d1d1d;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Background({ children }: any) {
  return <BackgroundColor>{children}</BackgroundColor>;
}
