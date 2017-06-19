import React from 'react'
import Note from './Note'

import './NoteList.css'

const NoteList = ( { notes, showNote, deleteNote }) => {
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
            deleteNote={deleteNote}
            />
          )
        })}
      </ul>
    </div>

    )
  }

export default NoteList
