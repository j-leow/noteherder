import React from 'react'

const Note = ({ note }) => {

  return (
    <li>
      <div className="note" onClick={(ev) => props.showNote(props.note)}>
        <div className="note-title">
          {note.title}
        </div>
        <div className="note-body">
          <p>
            {note.body}
          </p>
        </div>
        <button type="button" onClick={(ev) => props.deleteNote(props.note)}>
        <i
          className="fa fa-trash-o"
          aria-hidden="true"
        ></i>
        </button>
      </div>
    </li>
  )
}

export default Note
