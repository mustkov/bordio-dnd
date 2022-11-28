import styled from "styled-components";

const Container = styled.div`
  padding: 1.6875rem 0.75rem 0.9375rem 0.75rem;
  text-align: center;
  &:last-child {
    span {
      background-color: white;
    }
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color.main};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Counter = styled.span`
  padding: 0.125rem 0.5625rem;
  min-width: 26px;
  text-align: center;
  margin-left: 10px;
  color: #8c939f;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  border-radius: ${({ theme }) => theme.radius.big};
  background-color: #e8ebef;
`;

export { Container, Title, Counter };
