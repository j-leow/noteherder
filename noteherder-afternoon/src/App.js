import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import base, { auth } from './base'
import SignIn from './SignIn'
import SignOut from './SignOut'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      currentNote: {},
      uid: null,
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

  signIn = () => {
    return this.state.uid
  }

  authHandler = (userData) => {
     this.setState({ uid: userData.uid })
  }

  signOut = () => {
    auth
      .signOut()
      .then(() => this.setState({ uid: null}))
  }

  renderMain = () => {
    return (
      <div>
        <SignOut signOut={this.signOut} />
        <Main
          notes={this.state.notes}
          currentNote={this.state.currentNote}
          showNote={this.showNote}
          saveNote={this.saveNote}
          deleteNote={this.deleteNote}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.signIn() ? this.renderMain() : <SignIn authHandler={this.authHandler} />}
      </div>
    );
  }
}

export default App;
