import React from 'react'
import * as S from './styled'
import RoadmapSVG from "../../assets/icons/roadmap.svg"
import ScheduleSVG from "../../assets/icons/schedule.svg"
import TasksSVG from "../../assets/icons/tasks.svg"
import NotesSVG from "../../assets/icons/notes.svg"
import FilesSVG from "../../assets/icons/files.svg"
import loadable from '@loadable/component'

const ToolsItem = loadable(() => import("./Item"))

const Tools = () => {
  return (
    <S.ToolsContainer>
      <S.Header>Tools</S.Header>
      <S.Navigation>
        <ToolsItem to="/workspace/roadmap" icon={RoadmapSVG} text="Roadmap" />
        <ToolsItem to="/workspace/schedule" icon={ScheduleSVG} text="Schedule" />
        <ToolsItem to="/workspace/tasks" icon={TasksSVG} text="Tasks" />
        <ToolsItem to="/workspace/notes" icon={NotesSVG} text="Notes" />
        <ToolsItem to="/workspace/files" icon={FilesSVG} text="Files" />
      </S.Navigation>
    </S.ToolsContainer>
  )
}

export default Tools