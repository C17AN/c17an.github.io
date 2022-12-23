import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  cardFront: React.ReactNode;
  cardBack: React.ReactNode;
  width?: number | string;
  height?: number | string;
  zoomOnHover?: boolean;
}

const FlippableCard = ({
  cardFront,
  cardBack,
  height,
  width,
  ...rest
}: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const flipCard = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setIsFlipped((isFlipped) => !isFlipped);
      setTimeout(() => {
        setIsFlipping(false);
      }, 600);
    }
  };

  return (
    <Card
      isFlipped={isFlipped}
      onClick={flipCard}
      width={width}
      height={height}
      {...rest}
    >
      <CardSide side="FRONT">{cardFront}</CardSide>
      <CardSide side="BACK">{cardBack}</CardSide>
    </Card>
  );
};

const Card = styled.div<{
  isFlipped: boolean;
  width?: number | string;
  height?: number | string;
  zoomOnHover?: boolean;
}>`
  background-color: transparent;
  position: relative;
  perspective: 3000px;
  height: 100%;
  width: 100%;
  height: 400px;
  transition: transform 0.8s;
  will-change: transform;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) => isFlipped && "rotateY(180deg)"};
  cursor: pointer;
`;

const CardSide = styled.div<{ side: "FRONT" | "BACK" }>`
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: ${({ side }) => side === "BACK" && "rotateY(180deg)"};
  transform-style: preserve-3d;
  will-change: transform;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export default FlippableCard;
