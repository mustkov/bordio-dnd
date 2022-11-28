import React, { memo, MouseEventHandler } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import loadable from '@loadable/component'
import { ICard } from '../Card/types';
import * as S from "./styled"

const Card = loadable(() => import("../Card"))

interface IColumnProps {
  title: string;
  status: string;
  tasks: ICard[];
  addTask?: MouseEventHandler<HTMLDivElement>;
}

const Column: React.FC<IColumnProps> = ({ status, tasks }) => {

  return (
    <S.Column>
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            style={{ minHeight: '100vh' }}
            {...{ ref: provided.innerRef }}
            {...provided.droppableProps}
          >

            {tasks.map((task: ICard, index: number) =>
              <Card key={task.id} task={task} index={index}
              />

            )}
            {provided.placeholder}

          </div>

        )}

      </Droppable>
    </S.Column>
  )
}

export default memo(Column)