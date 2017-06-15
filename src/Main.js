import React from 'react'
import './css/Main.css'

import NoteForm from './NoteForm'
import Sidebar from './Sidebar'
import NoteList from './NoteList'


const Main = (props) => {
  return (
    <div className="Main">
      <Sidebar />
      <NoteList notes={props.notes}/>
      <NoteForm />
    </div>
  )
}

export default Main
