import React from 'react'
import * as S from './styled';
import { NavLinkProps } from 'react-router-dom';

type ToolsItem = NavLinkProps & {
  text: string,
  icon: string
}

const ToolsItem = ({ text, icon, ...props }: ToolsItem) => {
  return (
    <S.ToolsItem {...props}>
      <img src={icon} alt="Icon" />
      <S.Text>{text}</S.Text>
    </S.ToolsItem>
  )
}

export default ToolsItem