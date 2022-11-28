import React from 'react'
import { Route, Routes } from 'react-router-dom'
import loadable from '@loadable/component'


const WorkspacePage = loadable(() => import('../../pages/workspace'))
const Schedule = loadable(() => import('../../components/Schedule'))

export default function MainPage() {
  return (
    <Routes>
      <Route path="/workspace" element={<WorkspacePage />} >
        <Route path="schedule" element={<Schedule />} />
        <Route path="roadmap" element={null} />
        <Route path="tasks" element={null} />
        <Route path="notes" element={null} />
        <Route path="files" element={null} />
      </Route>
    </Routes>
  )
}
