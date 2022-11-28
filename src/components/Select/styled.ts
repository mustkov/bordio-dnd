import styled from "styled-components";
import { getTransition } from "utils/getTransition";

type TButton = {
  isOpen: boolean;
};

type TImg = {
  source: string;
};

const Container = styled.div`
  position: relative;
`;

const Img = styled.img<TImg>`
  background: url(${({ source }) => source});
  color: black;
`;

const Button = styled.button<TButton>`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.875rem;
  border-radius: ${({ theme }) => theme.radius.normal};
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.color.colorSelectOpen : theme.color.colorSelect};

  ${({ theme }) => getTransition(theme.duration.normal, "background-color")}

  & > svg {
    transform: ${({ isOpen }) => isOpen && "rotate(180deg)"};

    path {
      fill: ${({ theme }) => theme.color.gray800};
    }
  }
`;

const Text = styled.span`
  color: ${({ theme }) => theme.color.main};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.font.normal};
  line-height: 1rem;
  margin-right: 8px;
`;

const List = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  z-index: 10;
  padding: 0.375rem;
  min-width: 132px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: ${({ theme }) => theme.radius.small};
  background-color: ${({ theme }) => theme.color.white};
`;

const Li = styled.button<TButton>`
  width: 100%;
  text-align: left;
  padding: 0.75rem 0.5rem;
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1rem;
  border-radius: ${({ theme }) => theme.radius.tiny};
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.color.gray500 : "inherit"};

  ${({ theme }) => getTransition(theme.duration.normal, "background-color")}

  &:hover {
    background-color: ${({ theme }) => theme.color.gray500};
  }
`;

export { Container, Button, Text, List, Li, Img };
