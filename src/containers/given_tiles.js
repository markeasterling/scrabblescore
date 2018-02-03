import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTiles, toggleTile } from '../actions/index';


class GivenTiles extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.props.fetchTiles()
  }

  tileStuff(tile) {
    this.props.toggleTile(tile)
  }

  renderTiles(useageStatus) {
    return this.props.tiles.map((tile, index) => {
      return ( tile.used===useageStatus &&
        <li 
          key={index}
          onClick= {()=> this.tileStuff(this.props.tiles[index])}
        >
        {tile.tile}</li>)
    }) 

    // return Object.keys(this.props.tiles).map((key) => {
    //   return (
    //     <li key={key} 
    //       onClick={()=> this.props.toggleTile(this.props.tiles[key])}>
    //       {this.props.tiles[key].tile} 
    //     </li>)
    // })
    
  }

  render(){
    return(
      <div>
        <div>
          unused tiles
          <ul>
            {this.props.tiles && this.renderTiles(false)}
          </ul>
        </div>

        <div>
          used tiles

          <ul>
            {this.props.tiles && this.renderTiles(true)}
          </ul>
        </div>

      </div>
    )
  }
};

function mapStateToProps({ tiles }) {
  console.log({ tiles })
  return { tiles } 
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTiles, toggleTile }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GivenTiles);