import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchScore } from '../actions/index';

class WordInput extends Component {
  constructor(props) {
    super(props);

    this.state={word: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onInputChange(event) {
    this.setState({word: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchScore(this.state.word)
    this.setState({word: ''})
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="make a word here"
            value={this.state.word}
            onChange={this.onInputChange}
          />
          <span>
            <button type="submit">submit</button>
          </span>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchScore }, dispatch);
}

export default connect(null, mapDispatchToProps)(WordInput);
