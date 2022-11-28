import styled, { css } from "styled-components";

type StyledProps = { view: "primary" | "secondary" };

const SearchWrapper = styled.div<StyledProps>`
  display: flex;
  ${({ view, theme }) =>
    view === "primary"
      ? css`
          padding-left: 0.625rem;
          border-radius: ${theme.radius.small};
          background-color: ${theme.color.mainColorActive};
        `
      : css`
          padding-left: 1rem;
          border-radius: ${theme.radius.normal};
          background-color: #f5f8fa;
        `}
`;

const SearchField = styled.input<StyledProps>`
  display: inline;
  border: none;
  outline: none;
  background: none;
  width: 100%;
  flex: 1 1 140px;
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.font.normal};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  ${({ view }) =>
    view === "primary"
      ? css`
          padding: 0.5625rem;
          line-height: 0.875rem;
        `
      : css`
          padding: 0.75rem;
          line-height: 1rem;
        `}
`;

const SerchButton = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  padding: 0 ${({ view }) => (view === "primary" ? "0.625rem" : "1.125rem")};
`;

const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export { SearchWrapper, SearchField, SerchButton, ButtonIcon };
