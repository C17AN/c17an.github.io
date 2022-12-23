import styled from "@emotion/styled";
import React from "react";

type Props = {
  text: string;
  imageUrl?: string;
  backgroundColor?: string;
  color?: string;
};

const Chip = ({ text, backgroundColor, color, imageUrl }: Props) => {
  return (
    <ChipContainer backgroundColor={backgroundColor} color={color}>
      {text}
    </ChipContainer>
  );
};

const ChipContainer = styled.div<{ backgroundColor?: string; color?: string }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 4px 12px;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor || "#f5f5f5"};
  color: ${({ color }) => color || "#333"};
  transition: 0.2s ease-in-out opacity;

  &:hover {
    opacity: 0.7;
  }
`;

export default Chip;
