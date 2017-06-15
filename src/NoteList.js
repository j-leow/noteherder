import React from 'react'
import './css/NoteList.css'

const noteData = [
  {
    noteTitle: "Citizens of distant epochs",
    noteBody: "Sea of Tranquility the ash of stellar alchemy vastness is bearable only through love bits of moving fluff are creatures of the cosmos, consciousness a still more glorious dawn awaits two ghostly white figures in coveralls and helmets are soflty dancing tingling of the spine, concept of the number one brain is the seed of intelligence are creatures of the cosmos?",
  },
  {
    noteTitle: 'Preserve and cherish that pale blue dot',
    noteBody: "network of wormholes a billion trillion the only home we've ever known light years dream of the mind's eye. Intelligent beings!",
  },
  {
    noteTitle: 'Laws of physics',
    noteBody: 'Cambrian explosion radio telescope, circumnavigated citizens of distant epochs brain is the seed of intelligence two ghostly white figures in coveralls and helmets are soflty dancing galaxies inconspicuous motes of rock and gas',
  },
]

const NoteList = (props) => {
  return (
    <div className="NoteList">
      <h3>Notes</h3>

          <div className="note">
            <ul id="notes">
            { Object.keys(props.notes).map(noteId) => {
              return <li key={noteId}>{noteId}</li>
            }}
            {noteData.map((note, i) => <NoteLink key={i} note={note} />)}
            </ul>
          </div>

    </div>
  )
}

function NoteLink(props) {
  return (
      <li>
        <div className="note-title">
          {props.note.noteTitle}
        </div>
        <div className="note-body">
          <p>
            {props.note.noteBody}
          </p>
        </div>
      </li>
  )
}

export default NoteList
