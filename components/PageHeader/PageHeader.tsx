import styled from "@emotion/styled";
import React, {
  ReactElement,
  ReactNode,
} from "react";
import { SunFill } from "@emotion-icons/bootstrap/SunFill";
import { useStore } from "../../themes";
import Color from "color";
import { motion } from "framer-motion";

const HeaderContaner = styled.div`
  position: fixed;
  border-top: 1px solid
    ${(props) => props.theme.color.borderColor};
  border-bottom: 1px solid
    ${(props) => props.theme.color.borderColor};
  background: ${(props) =>
    Color(props.theme.color.background)
      .alpha(0.7)
      .toString()};
  backdrop-filter: blur(18px);
  width: 100vw;
  max-height: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  user-select: none;
`;

const TextContainer = styled.div`
  height: 100%;
  max-width: 90%;
  width: 720px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.p`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
  line-height: 22px;
  color: ${(props) =>
    props.theme.color.onSurface};
`;

const InfoTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 2;
  max-width: 320px;
  height: 60%;
`;

const InfoText = styled.a`
  font-family: Helvetica Now Display;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 19px;
  transition: all 0.2s ease-in-out;
  color: ${(props) =>
    props.theme.color.onSurface};
  &:hover {
    cursor: pointer;
  }
`;

const ModeButton = styled.button`
  background: ${(props) =>
    props.theme.color.darkerSurface};
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 6px;
  color: ${(props) =>
    props.theme.color.onSurface};
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 15px 0px
      rgba(0, 0, 0, 0.2);
  }
`;

const WhiteSunFill = styled(SunFill)`
  color: white;
  text-align: center;
`;

type Props = {
  children?: ReactNode;
};

export const ScaleHover: React.FC<Props> = ({
  children,
}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      transition={{
        bounce: 0.6,
        type: "spring",
      }}
    >
      {children}
    </motion.div>
  );
};

export default function PageHeader({}: Props) {
  const { toggleTheme } = useStore();
  return (
    <HeaderContaner>
      <TextContainer>
        <Name>Emil Angelov</Name>
        <InfoTab>
          <ScaleHover>
            <InfoText>About</InfoText>
          </ScaleHover>
          <ScaleHover>
            <InfoText>Projects</InfoText>
          </ScaleHover>
          <ScaleHover>
            <InfoText href="https://github.com/emilangelov1">
              Github
            </InfoText>
          </ScaleHover>
          <ScaleHover>
            <ModeButton
              onClick={() => toggleTheme()}
            >
              <motion.div
                whileHover={{ rotate: 60 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  duration: 0.3,
                }}
              >
                <WhiteSunFill />
              </motion.div>
            </ModeButton>
          </ScaleHover>
        </InfoTab>
      </TextContainer>
    </HeaderContaner>
  );
}
