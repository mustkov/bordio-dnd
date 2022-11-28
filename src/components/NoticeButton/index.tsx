import React, { memo } from 'react'
import Bell from 'assets/icons/bell.svg'
import * as S from './styled';

interface INoticeButton {
  count: number
}

const NoticeButton = ({ count }: INoticeButton) => {
  return (
    <S.Button>
      <img src={Bell} alt="Bell" />
      <S.Counter>{count > 99 ? '99+' : count}</S.Counter>
    </S.Button>
  )
}

export default memo(NoticeButton)
