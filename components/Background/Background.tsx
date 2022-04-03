import styled from "@emotion/styled";
import React from "react";

type Props = {};

const BackgroundColor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme.color.background};
  min-height: 100vh;
`;

export default BackgroundColor;
