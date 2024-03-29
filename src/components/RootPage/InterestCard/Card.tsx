import styled from "@emotion/styled";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import React from "react";
import FlippableCard from "../../common/FlippableWrapper";
import DocusaurusImage from "../../common/DocusaurusImage";
import { IoArrowForwardCircle } from "react-icons/io5";

export interface ICard {
  theme: "dark" | "light";
  frontProps: {
    title: string;
    description: string;
    imageUrl: string;
    backgroundColor: string;
  };
  backProps: {
    title: string;
    description: string;
    imageUrl: string;
    backgroundColor: string;
  };
}

const Card = ({ frontProps, backProps }: ICard) => {
  return (
    <FlippableCard
      cardFront={<CardFront {...frontProps} />}
      cardBack={<CardBack {...backProps} />}
    />
  );
};

const CardFront = ({
  title,
  description,
  imageUrl,
  backgroundColor,
}: ICard[keyof Pick<ICard, "frontProps">]) => {
  return (
    <Container backgroundColor={backgroundColor} className="interest-card">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <ArrowIcon size={60} color={"white"} />
      {/* <CardImage src={imageUrl} alt={title} /> */}
    </Container>
  );
};

const CardBack = ({
  title,
  description,
  imageUrl,
  backgroundColor,
}: ICard[keyof Pick<ICard, "frontProps">]) => {
  return (
    <Container backgroundColor={backgroundColor} className="interest-card">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardImage src={imageUrl} alt={title} />
    </Container>
  );
};

const Container = styled(motion.div)<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
  width: auto;
  border-radius: 20px;
  padding: 32px;
  width: 100%;
  height: 400px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: 0.2s ease-in-out all;
  }
`;

const CardTitle = styled.h3`
  font-size: 32px;
  color: #eee;
  font-weight: 800;
  margin-bottom: 12px;
`;

const CardDescription = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const ArrowIcon = styled(IoArrowForwardCircle)`
  position: absolute;
  bottom: 40px;
  right: 40px;
`;

const CardImage = styled(DocusaurusImage)`
  width: 128px;
  height: 128px;
  position: absolute;
  bottom: 40px;
  right: 40px;
  border-radius: 28px;
`;

export default Card;
