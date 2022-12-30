import styled from "@emotion/styled";
import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import InterestCard, { ICard } from "./Card";

type Props = {};

const CardList = (props: Props) => {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".interest-card",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: {
          each: 0.25,
          from: 0,
        },
      }
    );
  }, []);

  return (
    <CardListContainer>
      {INTEREST_LIST.map((card) => (
        <InterestCard {...card} key={card.frontProps.title} />
      ))}
    </CardListContainer>
  );
};

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 0 auto 40px auto;
`;

const INTEREST_LIST: ICard[] = [
  {
    theme: "light",
    frontProps: {
      title: "UI/UX",
      description: "인터렉션을 통해 사용자와 소통합니다.",
      backgroundColor: "#f54290",
      imageUrl: "img/RootPage/interaction.png",
    },
    backProps: {
      title: "더 나은 경험을 위해",
      description:
        "프론트엔드 개발자의 핵심 역량은, 좋은 사용자 경험을 제공하는 것에 있다고 생각합니다.",
      backgroundColor: "#f54290",
      imageUrl: "img/RootPage/interaction.png",
    },
  },
  {
    theme: "dark",
    frontProps: {
      title: "클라우드",
      description: "클라우드가 가진 무한한 가능성을 믿고 있습니다.",
      backgroundColor: "#f5a742",
      imageUrl: "img/RootPage/lambda.png",
    },
    backProps: {
      title: "클라우드",
      description: "클라우드가 가진 무한한 가능성을 믿고 있습니다.",
      backgroundColor: "#f5a742",
      imageUrl: "img/RootPage/lambda.png",
    },
  },
  {
    theme: "dark",
    frontProps: {
      title: "프론트엔드",
      description: "프론트엔드는 사용자 경험을 만듭니다.",
      backgroundColor: "#2bcf93",
      imageUrl: "",
    },
    backProps: {
      title: "프론트엔드",
      description: "프론트엔드는 사용자 경험을 만듭니다.",
      backgroundColor: "#2bcf93",
      imageUrl: "",
    },
  },
  {
    theme: "light",
    frontProps: {
      title: "컨테이너",
      description: "컨테이너 가상화가 보여주는 기술들에도 관심이 많습니다.",
      backgroundColor: "#3281db",
      imageUrl: "img/RootPage/container.png",
    },
    backProps: {
      title: "컨테이너",
      description: "컨테이너 가상화가 보여주는 기술들에도 관심이 많습니다.",
      backgroundColor: "#3281db",
      imageUrl: "img/RootPage/container.png",
    },
  },
];

export default CardList;
