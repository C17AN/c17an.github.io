import styled from "@emotion/styled";
import React from "react";
const heroVideo = require("@site/static/video/hero.mp4").default;

type Props = {};

const Hero = ({}: Props) => {
  return (
    <HeroContainer>
      <HeroText1>소프트웨어로 만들어갈</HeroText1>
      <HeroText2>더 멋진 세상을 위해</HeroText2>
      <StyledVideo src={heroVideo} autoPlay muted loop />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  position: relative;
`;

const HeroText1 = styled.h1`
  position: absolute;
  font-size: 64px;
  font-weight: 900;
  top: 10%;
  left: 10%;
  color: white;
`;

const HeroText2 = styled.h1`
  position: absolute;
  font-size: 64px;
  font-weight: 900;
  top: calc(10% + 80px);
  left: 10%;
  color: white;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
`;

export default Hero;
