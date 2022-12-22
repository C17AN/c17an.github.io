import styled from "@emotion/styled";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import React from "react";

export interface ICard {
  title: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
}

const hoverAnimation: VariantLabels | TargetAndTransition = {
  scale: 1.02,
  transition: {
    ease: "linear",
    duration: 0.1,
    bounce: 1,
  },
};

const Card = ({ title, description, imageUrl, backgroundColor }: ICard) => {
  return (
    <Container
      // whileHover={hoverAnimation}
      backgroundColor={backgroundColor}
      className="interest-card"
    >
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <img src={imageUrl} alt={title} />
    </Container>
  );
};

const Container = styled(motion.div)<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
  width: auto;
  border-radius: 20px;
  padding: 32px;
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
  font-weight: 700;
`;

const CardDescription = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export default Card;
