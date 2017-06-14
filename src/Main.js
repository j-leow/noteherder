import React from 'react'
import './css/Main.css'

import NoteForm from './NoteForm'
import Sidebar from './Sidebar'
import NoteList from './NoteList'


const Main = () => {
  return (
    <div className="Main">
      <Sidebar />
      <NoteList />
      <NoteForm />
    </div>
  )
}

export default Main