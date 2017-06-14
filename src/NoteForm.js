import React, { Component } from 'react'
import './css/NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      noteTitle: '',
      noteText: '',
      noteTitles: [],
      noteTexts: [],
    }

    this.updateNote = this.updateNote.bind(this)
  }

  updateNote(ev) {
    this.setState({
      noteTitle: ev.target.value,
      noteText: ev.target.value
    })
  }

  render() {
   return (
    <div className="NoteForm">
        <form>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="Title your note" 
              value={this.state.noteTitle}
              onChange={this.updateNote} />
          </p>
          <p>
            <textarea 
              name="body" 
              cols="30" 
              rows="10" 
              placeholder="Just start typing..."
              onChange={this.updateNote}>
            </textarea>
          </p>
          <button className="button" onClick={this.addNote}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default NoteForm