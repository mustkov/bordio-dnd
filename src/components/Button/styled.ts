import styled from "styled-components";

const Text = styled.span`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.25rem;
  border-radius: ${({ theme }) => theme.radius.normal};
  background-color: ${({ theme }) => theme.color.toolsActive};
`;

export { Text, Button };
