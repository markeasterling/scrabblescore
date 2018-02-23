import React, { Component } from 'react';
import {moveToInPlay} from '../actions/index'

export const Rack = ({tiles}) => {
  console.log(tiles)
  return tiles.map((tile, index) => {
    const letter = Object.values(tile)[0]
    return (
      <div
        className="tile"
        key={Object.keys(tile)[0]}
        onClick={()=>{moveToInPlay(tile)}}
      >
        {letter}
      </div>
    )
  })
}
