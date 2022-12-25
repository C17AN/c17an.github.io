import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useWakaTime } from "@site/src/remotes/wakatime/useWakaTime";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import Chip from "../common/Chip";
import DocusaurusImage from "../common/DocusaurusImage";
import Text from "../common/Text";
import ExperienceList from "./Experiences/ExperienceList";
import Hero from "./Hero";
import InterestCardList from "./InterestCard/CardList";

type Props = {};

const RootPage = (props: Props) => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useLayoutEffect(() => {
    gsap.to(text1Ref.current, {
      duration: 1,
      //   x: 100,
    });
  }, []);

  const wakatimeQuery = useWakaTime();

  return (
    <Container ref={containerRef}>
      {/* <Hero /> */}
      <Body>
        <Text typography="h1" ref={text1Ref}>
          안녕하세요!
        </Text>
        <Text typography="h1" ref={text1Ref}>
          프론트엔드 개발자, 김찬민입니다.
        </Text>
        <ChipContainer>
          <Chip text="LinkedIn" backgroundColor="#0e76a8" color="#fff" />
          <Chip text="Github" backgroundColor="#000" color="#fff" />
        </ChipContainer>
        <IntroductionContainer>
          <IntroductionText>
            복잡한 정보를 예쁘고 간단하게 전달할 수 있는 UI의 매력에 이끌려
            프론트엔드 개발을 시작하게 되었습니다.
          </IntroductionText>
          <IntroductionText>
            새로운 기술을 배우는 것을 두려워하지 않으며, 기술로 더 편리한 세상을
            만드는 데에 기여하고 싶습니다.
          </IntroductionText>
        </IntroductionContainer>
        <SubTitle typography="h3" ref={text2Ref}>
          이런 기술들에 관심이 많습니다.
        </SubTitle>
        <InterestCardList />
        <SubTitle typography="h3" ref={text2Ref}>
          이런 경험들을 쌓아 왔습니다.
        </SubTitle>
        <ExperienceList />
        <Text typography="h3" ref={text2Ref}>
          그리고 이런 개발자가 되고자 합니다.
        </Text>
      </Body>
      {/* <ParallaxImage1 src="/img/Rootpage/cloud-function.png" />
      <ParallaxImage2 src="/img/Rootpage/node.png" />
      <ParallaxImage3 src="/img/Rootpage/aws.jpeg" /> */}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 60px 0 120px 0;
  background-color: rgba(0, 0, 0, 0.02);
`;

const IntroductionContainer = styled.div`
  margin: 32px 0 60px 0;
`;

const Body = styled.div`
  background-color: rgba(0, 0, 0, 0, 0.01);
  /* border: 1px solid rgba(0, 0, 0, 0.05); */
  /* box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.05); */
  backdrop-filter: blur(8px);
  padding: 64px 80px;
  border-radius: 40px;
  max-width: min(1140px, 86%);
  margin: 0 auto;
`;

const ChipContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const SubTitle = styled(Text)`
  margin-bottom: 24px;
`;

const IntroductionText = styled(Text)`
  margin: 4px 0;
`;

const ParallaxImage1 = styled(DocusaurusImage)`
  position: absolute;
  max-width: 300px;
  border-radius: 20px;
  top: 0;
  z-index: -1;
  transform: rotateX(-60deg) rotateZ(-40deg);
`;

const ParallaxImage2 = styled(DocusaurusImage)`
  position: absolute;
  max-width: 200px;
  border-radius: 20px;
  top: 200px;
  right: 200px;
  z-index: -1;
  transform: rotateZ(20deg);
`;

const ParallaxImage3 = styled(DocusaurusImage)`
  position: absolute;
  max-width: 300px;
  border-radius: 20px;
  top: 0;
  z-index: -1;
  transform: rotateX(-60deg) rotateZ(-40deg);
`;

export default RootPage;
