import React from 'react'
import loadable from '@loadable/component'

import * as S from './styled';

const Schedule = loadable(() => import('../../components/Schedule'))
const Tools = loadable(() => import('../../components/Tools'))


const WorkspacePage: React.FC = () => {
  return (
    <S.WorkpaceContainer>
      <Tools />
      <Schedule />
    </S.WorkpaceContainer>
  )
}

export default WorkspacePage