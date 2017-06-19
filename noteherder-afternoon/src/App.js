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
    auth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.authHandler(user)
        }
      }
    )
  }

  syncNotes= () => {
    base.syncState(
      `${this.state.uid}/notes`,
      {
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

  removeNote = (note) => {
    const notes = {...this.state.notes}
    notes[note.id] = null
    this.setState({ notes })
  }

  // showNote = (currentNote) => {
  //   this.setState({ currentNote })
  // }

  // deleteNote = (note) => {
  //   console.log(note);
  //   const notes = {...this.state.notes}
  //   if (!notes[note.id]) {
  //     return
  //   }
  //   delete notes[note.id]
  //   this.setState({ notes })
  // }

  signIn = () => {
    return this.state.uid
  }

  authHandler = (userData) => {
     this
     .setState({ uid: userData.uid },
     this.syncNotes)
  }

  signOut = () => {
    auth
      .signOut()
      .then(() => this.setState({ uid: null}))
  }

  renderMain = () => {
    const actions = {
      saveNote: this.saveNote,
      removeNote: this.removeNote,
    }

    return (
      <div>
        <SignOut signOut={this.signOut} />
        <Main
          notes={this.state.notes}
          {...actions}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.signIn() ? this.renderMain() : <SignIn />}
      </div>
    );
  }
}

export default App;
