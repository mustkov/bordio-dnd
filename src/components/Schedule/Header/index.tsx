import React, { memo } from 'react'
import PlusSVGButton from 'assets/icons/plus.svg'
import loadable from '@loadable/component'
import imageURL from "assets/images/user.jpg"

import * as Image from '../../Avatar';
import * as S from "./styled"


const Select = loadable(() => import("../../Select"))
const Search = loadable(() => import("../../Search"))
const Button = loadable(() => import("../../Button"))
const NoticeButton = loadable(() => import("../../NoticeButton"))


const VIEW = ["Board view", "Table view", "Kanban"]
const FILTER = ["Filter"]

const Header = () => {
  const [view, setView] = React.useState(VIEW[2])
  const [filter, setFilter] = React.useState(FILTER[0])

  const handleView = (value: string) => {
    setView(value)
  }
  const handleFilter = (value: string) => {
    setFilter(value)
  }

  return (
    <S.Container>
      <S.SideContainer>
        <Button icon={PlusSVGButton} text="Add new" />
        <Select value={view} setValue={handleView} options={VIEW} />
        <Select value={filter} setValue={handleView} options={FILTER} />
      </S.SideContainer>
      <S.SideContainer>
        <Search view="secondary" />
        <NoticeButton count={100} />
        <Image.Avatar src={imageURL} />
      </S.SideContainer>
    </S.Container>
  )
}

export default memo(Header)