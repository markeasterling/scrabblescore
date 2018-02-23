import React, { Component } from 'react';
import { connect } from 'react-redux';
import './given_tiles.css';
import { bindActionCreators } from 'redux';
import { fetchTiles, fetchScore, moveToRack, moveToInPlay } from '../actions/index';
import { Rack } from '../components/rack';


class GivenTiles extends Component {
  constructor(props) {
    super(props);
    this.props.fetchTiles()
  }

  componentDidMount() {
    this.props.fetchTiles()
  }

  renderTiles() {
      return this.props.tiles.rack.map((tile, index) => {
        const letter = Object.values(tile)[0]
        return (
          <div
            className="tile"
            key={Object.keys(tile)[0]}
            onClick={()=>{this.props.moveToInPlay(tile)}}
          >
            {letter}
          </div>
        )

      })
  }

  render(){
    // if (this.props.tiles.rack && this.props.tiles.rack.length > 0) {
    //   return(
    //     <div>
    //       { this.renderTiles() }
    //     </div>
    //   )
    // } else {
    //   return <div>fuck</div>
    // }
      return ((this.props.tiles.rack.length > 0) && <Rack tiles={this.props.tiles.rack} />)
  }
};

function mapStateToProps(state) {
  console.log('mapStateToProps', state)
  return state
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTiles, fetchScore, moveToInPlay, moveToRack }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GivenTiles);
