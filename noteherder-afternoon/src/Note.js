import React from 'react'
import './Note.css'

const Note = ({ note, showNote, deleteNote }) => {
  const userDelete = (ev) => {
    deleteNote(note)
  }

  return (
    <li>
      <div className="note" onClick={(ev) => showNote(note)}>
        <div className="note-title">
          {note.title}
        </div>
        <div className="note-body">
          <p>
            {note.body}
          </p>
        </div>
        <div>
          <button onClick={userDelete}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </div>
      </div>
    </li>
  )
}

export default Note
