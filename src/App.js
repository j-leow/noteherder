import React, { Component } from 'react';
import './App.css';

import NoteForm from './NoteForm'
import Sidebar from './Sidebar'
import NoteList from './NoteList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <NoteList />
        <NoteForm />
      </div>
    );
  }
}

export default App;
