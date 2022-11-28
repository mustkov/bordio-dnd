import React from 'react'
import LogoSVG from '../../assets/icons/logo.svg';
import * as S from './styled';

function Logo() {
  return (
    <S.Logo to="/">
      <img src={LogoSVG} alt="Logo" />
    </S.Logo>
  )
}

export default Logo