import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScoreOutput extends Component {



  render(){
    return (
      <div>
        {this.props.score ? this.props.score.points : ''}
      </div>
    )
  }
}

function mapStateToProps({ score }) {
  console.log('score', score)
  return { score }
}

export default connect(mapStateToProps)(ScoreOutput)
