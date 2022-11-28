import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { getTransition } from "utils/getTransition";

const Text = styled.span`
  color: ${({ theme }) => theme.color.main};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1rem;

  ${({ theme }) => getTransition(theme.duration.normal, "color")}
`;

const ToolsItem = styled(NavLink)`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.6875rem 0.625rem;
  gap: 10px;

  & > svg path {
    ${({ theme }) => getTransition(theme.duration.normal)}
  }
  &:visited {
    color: ${({ theme }) => theme.color.main};
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 4.12px;
    border-radius: 0px 10px 10px 0px;

    ${({ theme }) => getTransition(theme.duration.normal, "background-color")}
  }

  &:hover,
  &.active {
    & ${Text} {
      color: ${({ theme }) => theme.color.toolsActive};
    }

    & > svg path {
      fill: ${({ theme }) => theme.color.toolsActive};
    }
  }

  &.active::after {
    background-color: ${({ theme }) => theme.color.toolsActive};
  }
`;

export { ToolsItem, Text };
