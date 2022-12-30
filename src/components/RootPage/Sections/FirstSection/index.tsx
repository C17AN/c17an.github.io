import styled from "@emotion/styled";
import Chip from "@site/src/components/common/Chip";
import DocusaurusImage from "@site/src/components/common/DocusaurusImage";
import Section from "@site/src/components/common/Section";
import Text from "@site/src/components/common/Text";
import React from "react";

const FirstSection = () => {
  return (
    <Section>
      <Text typography="h1">안녕하세요!</Text>
      <Text typography="h1">프론트엔드 개발자, 김찬민입니다.</Text>
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
    </Section>
  );
};

const IntroductionContainer = styled.div`
  margin: 32px 0 60px 0;
`;

const ChipContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
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

export default FirstSection;
