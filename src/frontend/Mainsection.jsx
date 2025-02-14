import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import CodeNotebookApp from './CodeNotebookApp'
import ProfilePage from './Profile/ProfilePage'
const Mainsection = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/notebook" element={<CodeNotebookApp />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    </div>
  )
}

export default Mainsection