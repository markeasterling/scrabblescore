import React, { Component } from 'react';
import './App.css';
import WordInput from './containers/word_input';
import ScoreOutput from './containers/score_output';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WordInput />
        <ScoreOutput />
      </div>
    );
  }
}

export default App;
