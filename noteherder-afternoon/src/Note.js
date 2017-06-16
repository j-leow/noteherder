import React from 'react'

const Note = ({ note, showNote, deleteNote }) => {

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
      </div>
    </li>
  )
}

export default Note
