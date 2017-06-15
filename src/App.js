import React, { Component } from 'react';

import './css/App.css';
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {} 
    }
  }

  saveNote = (note) => {
    if(!note.id) {
      note.id = `note-${Date.now()}` //This will give the note an ID
    }
    const notes = {...this.state.notes} //Spread syntax is for arrays but Babel allows us to use it on objs as well. You can use it in React.
    notes[note.id] = note
    this.setState({ notes })   //Destructuring argument
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} saveNote={this.saveNote}/>
      </div>
    );
  }
}

export default App;
