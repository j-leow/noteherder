import React from 'react'
import Note from './Note.js'

import './NoteList.css'

const NoteList = (props) => {
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {Object.keys(props.notes).map((noteId) => {
          return <Note note={props.notes[noteId]}/>
        })}
      </ul>
    </div>

    )
  }

export default NoteList
