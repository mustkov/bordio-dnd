import styled, { css } from "styled-components";

type CardStyle = {
  cardStyle: any;
  completed: boolean;
};

const CardWrapper = styled.div<CardStyle>`
  max-height: 84px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 15px;
  margin: 10px 0;
  color: ${({ theme }) => theme.color.black};
  background: ${(props) => props.color};
  border-radius: 8px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
    cursor: grab;
  }

  ${({ theme, completed }) => css`
    background-color: ${completed && theme.color.canceledCard};
    color: ${completed && theme.color.canceledCardText};
    text-decoration: ${completed && "line-through"};
  `}
`;

const TitleCard = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  max-height: 32px;
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

const DurationWrapper = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
`;

export { CardWrapper, TitleCard, DurationWrapper };
