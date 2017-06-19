import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {

  return (
    <div className="Main">
      <Sidebar />
      <NoteList
        notes={props.notes}
        showNote={props.showNote}
        deleteNote={props.deleteNote}
      />
      <NoteForm
        {...props}
      />
    </div>
  )
}

export default Main
