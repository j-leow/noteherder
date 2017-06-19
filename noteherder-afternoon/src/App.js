import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import base from './base'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      currentNote: {},
    }
  }

componentWillMount() {
  base.syncState(
    'notes', {
      context: this,
      state: 'notes',
    }
  )
}

  saveNote = (note) => {
    if(!note.id) {
      note.id=`note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes })
  }

  showNote = (currentNote) => {
    this.setState({ currentNote })

  }

  deleteNote = (note) => {
    console.log(note);
    const notes = {...this.state.notes}
    if (!notes[note.id]) {
      return
    }
    delete notes[note.id]
    this.setState({ notes })
  }

  render() {
    return (
      <div className="App">
        <Main
          notes={this.state.notes}
          currentNote={this.state.currentNote}
          showNote={this.showNote}
          saveNote={this.saveNote}
          deleteNote={this.deleteNote}
        />
      </div>
    );
  }
}

export default App;
