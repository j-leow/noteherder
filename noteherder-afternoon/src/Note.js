import React from 'react'
import './Note.css'

const Note = ({ note, setCurrentNoteId }) => {
  // const userDelete = (ev) => {
  //   deleteNote(note)
  // }

  return (
    <a onClick={() => setCurrentNoteId(note.id)}>
      <li>
        <div className="note">
          <div className="note-title">
            {note.title}
          </div>
          <div className="note-body">
            <p>
              {note.body}
            </p>
          </div>
        </div>
      </li>
    </a>
  )
}

export default Note
