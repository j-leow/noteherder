import React, { Component } from 'react'

import './css/NoteForm.css'

class NoteForm extends Component {
  constructor(props) {  //Make sure we have props, otherwise we won't have acces to them.
    super(props)

    this.state = {
      note: this.blankNote(),
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => this.props.saveNote(this.state.note) //since setState is asynch, we will want to have another function to call note when setState is done working.
    )

  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({
      note: this.blankNote()
    })
  }

  render() {
    return (
      <div className="NoteForm">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              onChange={this.handleChanges}
              value={this.state.note.title}
            />
          </p>
          <p>
            <textarea
              name="body"
              placeholder="Just start typing..."
              onChange={this.handleChanges}
              value={this.state.note.body}
          ></textarea>
          </p>
          <button type="submit">Save and new</button>
        </form>
      </div>
    )
  }
}

export default NoteForm
