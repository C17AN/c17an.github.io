import styled from "@emotion/styled";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
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

  return (
    <PageContainer ref={containerRef}>
      <Text ref={text1Ref}>안녕하세요!</Text>
      <Text ref={text1Ref}>프론트엔드 개발자, 김찬민입니다.</Text>
      <div>
        복잡한 정보를 예쁘고 간단하게 전달할 수 있는 UI의 매력에 이끌려
        프론트엔드 개발을 시작하게 되었습니다.
      </div>
      <div>
        새로운 기술을 배우는 것을 두려워하지 않으며, 기술로 더 편리한 세상을
        만드는 데에 기여하고 싶습니다.
      </div>
      <Text ref={text2Ref}>이런 것들에 관심이 많습니다.</Text>
      <InterestCardList />
      <Text ref={text2Ref}>이런 경험들을 쌓아 왔습니다.</Text>
      <Text ref={text2Ref}>그리고, 이런 개발자가 되고자 합니다.</Text>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: min(1140px, 86%);
  margin: 0 auto;
`;

const Text = styled.div`
  font-size: 46px;
  font-weight: 800;
  /* text-align: center; */
  margin: 24px 0;
`;

export default RootPage;
