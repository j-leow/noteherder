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
      uid: null,
      currentNoteId: null,
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

  setCurrentNoteId = (noteId) => {
    this.setState({ currentNoteId: noteId })
  }

  renderMain = () => {
    const noteData = {
      note: this.state.notes,
      currentNoteId: this.state.currentNoteId
    }
    const actions = {
      saveNote: this.saveNote,
      removeNote: this.removeNote,
      setCurrentNoteId: this.setCurrentNoteId,
    }

    return (
      <div>
        <SignOut signOut={this.signOut} />
        <Main
          {...noteData}
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
