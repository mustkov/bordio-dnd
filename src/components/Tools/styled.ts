import styled from "styled-components";

const ToolsContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 1.5rem 0;
  min-width: 154px;
  background-color: ${({ theme }) => theme.color.grayLight};
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.color.main};
  padding: 0 1rem;
  font-size: ${({ theme }) => theme.font.big};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1.3125rem;
`;

const Navigation = styled.nav`
  display: flex;
  margin-top: 26px;
  flex-direction: column;
`;

export { ToolsContainer, Header, Navigation };
