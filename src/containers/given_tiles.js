import React, { Component } from 'react';
import { connect } from 'react-redux';
import './given_tiles.css';
import { bindActionCreators } from 'redux';
import { fetchTiles, toggleTile, fetchScore } from '../actions/index';


class GivenTiles extends Component {
  constructor(props) {
    super(props);

    this.state = {activeLetters: []}
  }

  componentWillMount() {
    this.props.fetchTiles()
  }

  tileStuff(tile) {
    this.props.toggleTile(tile)
    this.addOrRemoveTile(tile)

  }

  addOrRemoveTile(tile) {
    if(tile.used){
      const tilesUsed = this.state.activeLetters;
      const chosenTileId = tile.id
      console.log('before map', tilesUsed)
      tilesUsed.map((letter, index)=>{
        (letter.id === chosenTileId)? tilesUsed.splice(index,1): null;
      })
      console.log('after map',tilesUsed)
      this.setState({activeLetters: tilesUsed})
    } else if(!tile.used) {
      console.log("state from tile NOT used", this.state.activeLetters)
      const anArray = this.state.activeLetters;
      anArray.push(tile)
      console.log(anArray)
      this.setState({activeLetters: anArray})
      // this.setState({activeLetters: this.state.activeLetters.push(tile)})
    }
  }

  removeTile(tile) {
    const tilesUsed = this.state.activeLetters;
    const chosenTileId = tile.id
    console.log('before map', tilesUsed)
    tilesUsed.map((letter, index)=>{
      (letter.id === chosenTileId)? tilesUsed.splice(index,1): null;
    })
    console.log('after map',tilesUsed)
    this.setState({activeLetters: tilesUsed})
  }

  renderTiles() {

      console.log('render tiles',this.props.tiles)
      return this.props.tiles.rack.map((tile, index) => {
        console.log(Object.values(tile)[0])
        const letter = Object.values(tile)[0]
        return (
          <div className="tile">{letter}</div>
        )
      })
  }

  generateWord() {
    return this.state.activeLetters.map((letter, index) => {
      return (
        <div
          className="tile"
          key={index}
          onClick={() => {
            console.log(letter)
            this.props.toggleTile(letter)
            this.removeTile(letter)
          }}
        >
          {letter.tile}
        </div>
      )
    })
  }

  render(){
    return(
      <div>
        {this.renderTiles()}
      </div>

    )
  }
};

function mapStateToProps(state) {
  return state
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTiles, toggleTile, fetchScore }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GivenTiles);
