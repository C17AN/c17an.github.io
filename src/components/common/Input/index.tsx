import styled from "@emotion/styled";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = ({ label, ...props }: Props) => {
  return (
    <InputWrapper className="input__wrapper">
      {label && <Label className="input__label">{label}</Label>}
      <StyledInput autoComplete="false" autoCorrect="false" {...props} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 13px;
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  padding: 12px 16px;
  transition: 0.15s ease-in-out all;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  border: 2px solid rgba(0, 0, 0, 0.01);
  will-change: auto;

  &:focus {
    border: 2px solid red;
    border-color: red !important;
    outline: none;
  }

  &::placeholder {
  }
`;

export default Input;
