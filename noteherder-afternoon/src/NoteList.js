import React from 'react'
import Note from './Note.js'

import './NoteList.css'

const NoteList = ( { notes, showNote }) => {
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {Object.keys(notes).map((noteId) => {
          return (
            <Note
            note={notes[noteId]}
            key={noteId}
            showNote={showNote}
            />
          )
        })}
      </ul>
    </div>

    )
  }

export default NoteList
