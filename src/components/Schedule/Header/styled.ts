import styled from "styled-components";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
  box-shadow: 0px 2px 4px #f0f1f2;
  background-color: ${({ theme }) => theme.color.white};
`;

const SideContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export { Container, SideContainer };
