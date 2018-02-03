import React, { Component } from 'react';
import WordInput from './containers/word_input';
import ScoreOutput from './containers/score_output';
import GivenTiles from './containers/given_tiles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GivenTiles />
        <WordInput />
        <ScoreOutput />
      </div>
    );
  }
}

export default App;
