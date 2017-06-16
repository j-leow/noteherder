import React, { Component } from 'react';

import './App.css';
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      currentNote: {},
      }
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
    const notes = {...this.state.notes}
    notes[note.id].delete()
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
