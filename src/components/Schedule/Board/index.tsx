import React, { memo } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { Status } from 'data/board/model';
import { defaultData } from 'data/board';
import loadable from '@loadable/component'
import Plus from "assets/icons/plus.svg"
import { ICard } from './Card/types';
import * as S from './styled'


const Column = loadable(() => import('./Column'))
const ColumnHeader = loadable(() => import('./ColumnHeader'))


const Board = () => {
  const [tasks, setTasks] = React.useState<ICard[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    setTasks(defaultData)
    setIsLoading(true)
  }, [])

  const handleDragEnd = React.useCallback((result: DropResult) => {
    const { destination, draggableId } = result;

    if (!destination) {
      return;
    }

    setTasks(tasks => tasks.map(task => {

      if (task.id === +draggableId) {
        return {
          ...task,
          status: Status[destination.droppableId as keyof typeof Status]
        }
      }
      return task
    }))

  }, []);

  const typeTasks = React.useCallback((status: string) => {
    return tasks.filter(task => task.status.toLowerCase() === status.toLowerCase())
  }, [tasks])

  const countTasks = React.useMemo(() => (status: string) => {
    return tasks.filter(task => task.status.toLowerCase() === status.toLowerCase()).length
  }, [tasks])

  return (
    <S.Container>
      <S.BoardHeader>

        {Object.keys(Status).map((status, id) => (
          <ColumnHeader key={id} label={status} count={countTasks(status)} />
        ))}
        <ColumnHeader label={`Create status`} image={Plus} />
      </S.BoardHeader>
      <S.BoardBody>
        {isLoading &&
          <DragDropContext onDragEnd={handleDragEnd} >
            {Object.keys(Status).map((column, index) =>
              <Column
                key={`column-${index}`}
                title={column}
                status={column}
                tasks={typeTasks(column)}
              />
            )}
          </DragDropContext>}
      </S.BoardBody>

    </S.Container>
  )
}

export default memo(Board) 