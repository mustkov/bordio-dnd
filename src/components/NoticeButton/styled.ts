import styled, { css } from "styled-components";

const Button = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const Counter = styled.span`
  position: absolute;
  left: 50%;
  right: -25%;
  top: -12.5%;
  bottom: 50%;
  padding: 0.25rem 0.1875rem;
  line-height: 0.625rem;

  ${({ theme }) => css`
    color: ${theme.color.white};
    font-size: ${theme.font.tiny};
    font-weight: ${theme.fontWeight.normal};
    border: 1px solid ${theme.color.white};
    border-radius: ${theme.radius.tiny};
    background-color: ${theme.color.notice};
  `}
`;

export { Button, Counter };
