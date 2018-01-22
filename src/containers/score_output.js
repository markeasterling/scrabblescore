import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScoreOutput extends Component {



  render(){
    return (
      <div>
        {this.props.score ?
          `that's ${this.props.score.points} entire points` : ''}
      </div>
    )
  }
}

function mapStateToProps({ score }) {
  return { score }
}

export default connect(mapStateToProps)(ScoreOutput)
