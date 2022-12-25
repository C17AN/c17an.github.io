import styled from "@emotion/styled";
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "@site/src/contants/ui";
import gsap, { Power3 } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import Text from "../common/Text";
import NameCard from "./NameCard";

type Props = {};

const VisitorPage = (props: Props) => {
  const backgroundRef = useRef(null);
  const heroContainerRef = useRef(null);
  const heroTextRef = useRef(null);
  const subTitleRef = useRef(null);
  const bodyRef = useRef(null);

  // useLayoutEffect(() => {
  //   const heroContainer = heroContainerRef.current;
  //   const heroText = heroTextRef.current;
  //   const subTitle = subTitleRef.current;
  //   const body = bodyRef.current;

  //   gsap
  //     .timeline()
  //     .fromTo(
  //       heroText,
  //       {
  //         y: 100,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         duration: 1,
  //         opacity: 1,
  //         delay: 0.5,
  //         ease: Power3.easeInOut,
  //       }
  //     )
  //     .fromTo(
  //       subTitle,
  //       {
  //         y: 100,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         duration: 1,
  //         opacity: 1,
  //         delay: -0.5,
  //         ease: Power3.easeInOut,
  //       }
  //     )
  //     .to(heroContainer, {
  //       translateY: -100,
  //       opacity: 0,
  //       display: "none",
  //       duration: 1.5,
  //     })
  //     .fromTo(
  //       body,
  //       {
  //         y: 100,
  //         opacity: 0,
  //       },
  //       {
  //         y: 0,
  //         duration: 1,
  //         opacity: 1,
  //         ease: Power3.easeInOut,
  //       }
  //     );
  // }, []);

  return (
    <Container className="namecard-container" ref={backgroundRef}>
      {/* <HeroContainer ref={heroContainerRef}>
        <HeroTitle ref={heroTextRef}>Hello, Visitor</HeroTitle>
        <Text ref={subTitleRef} typography="h2">
          안녕하세요!
        </Text>
      </HeroContainer> */}
      <Body className="namecard-content" ref={bodyRef}>
        {/* <Text typography="h3">여러분만의 멋진 명함을 만들어 공유해주세요</Text> */}
        <NameCard />
      </Body>
    </Container>
  );
};

const HeroContainer = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 120px;
  text-align: center;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  overflow: hidden;
  height: calc(100vh - ${FOOTER_HEIGHT + HEADER_HEIGHT}px);

  background-color: rgba(0, 0, 0, 0, 0.01);
  margin: 0 auto;
`;

export default VisitorPage;
