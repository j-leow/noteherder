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

    this.updateTitle = this.updateTitle.bind(this)
    this.updateText = this.updateText.bind(this)
    this.deleteNote = this.deleteNote.bind(this)
  }

  updateTitle(ev) {
    this.setState({
      noteTitle: ev.target.value,
    })
  }

  updateText(ev) {
    this.setState({
      noteText: ev.target.value,
    })
  }

  deleteNote(ev) {
    this.setState(
      {
        noteTitle: '',
        noteText: ''
      }
    )
  }

  addNote(ev) {
    const state = {...this.state}
    const note = {
      time: new Date(),
      noteTitle:
    }

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
              onChange={this.updateTitle} />
          </p>
          <p>
            <textarea 
              name="body" 
              cols="30" 
              rows="10" 
              placeholder="Just start typing..."
              onChange={this.updateText}>
            </textarea>
          </p>
          <button className="button" onClick={this.addNote}>
            <i className="fa fa-plus-square-o" aria-hidden="true"></i>
          </button>
          <button className="delete" onClick={this.deleteNote}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    )
  }
}

export default NoteForm