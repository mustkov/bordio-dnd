import React from 'react'
import * as S from "./styled"

interface IColumnHeader {
  label: string,
  count?: number;
  image?: string
}

const ColumnHeader: React.FC<IColumnHeader> = ({ label, count, image }) => {
  return (
    <S.Container>
      <S.Title>
        <img src={image} alt="" style={{ marginRight: "4px" }} />
        {label}
        <S.Counter>{count}</S.Counter>
      </S.Title>
    </S.Container>
  )
}

export default ColumnHeader