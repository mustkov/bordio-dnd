import React, { useRef } from 'react'
import * as S from './styled'
import { ICard } from './types'
import { Draggable } from 'react-beautiful-dnd';

interface ICardProps {
  index: number,
  task: ICard,
}

const Card = ({ index, task }: ICardProps) => {

  return (
    <Draggable
      draggableId={task.id.toString()}
      index={index}>
      {(provided) =>
        <S.CardWrapper
          completed={task.status === "completed"}
          color={task.color}
          {...provided.draggableProps}
          {...{ ref: provided.innerRef } as any}
          {...provided.dragHandleProps}
        >
          <S.TitleCard>{task.title}</S.TitleCard>
          <S.DurationWrapper>{task.duration}</S.DurationWrapper>
        </S.CardWrapper>}
    </Draggable>

  )
}

export default Card