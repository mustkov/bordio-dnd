import React from 'react'
import loadable from '@loadable/component'

import * as S from './styled'


const Header = loadable(() => import("./Header"))
const Board = loadable(() => import("./Board"))


const Schedule = () => {
  return (
    <S.Container>
      <Header />
      <Board />
    </S.Container>
  )
}

export default Schedule