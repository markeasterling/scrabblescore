import axios from 'axios';

const ROOT_URL = `http://localhost:8080/scrabbleScore`
const distribution = ['e','e','e','e','e','e','e','e','e','e','e','e','a','a','a','a','a','a','a','a','a','i','i','i','i','i','i','i','i','i','o','o','o','o','o','o','o','o','n','n','n','n','n','n','r','r','r','r','r','r','t','t','t','t','t','t','l','l','l','l','s','s','s','s','u','u','u','u','d','d','d','d','g','g','g','b','b','c','c','m','m','p','p','f','f','h','h','v','v','w','w','y','y','k','j','x','q','z']
const tilesToDraw = 7;


export const FETCH_SCORE = 'FETCH_SCORE';
export const FETCH_TILES = 'FETCH_TILES';
export const TOGGLE_TILE = 'TOGGLE_TILE';
export const MOVE_TO_IN_PLAY = 'MOVE_TO_IN_PLAY';
export const MOVE_TO_RACK = 'MOVE_TO_RACK';


export function fetchScore(word) {
  const url = `${ROOT_URL}?word=${word}`
  const request = axios.get(url)
  console.log(`fetch the score for ${word}`, request);

  return {
    type: FETCH_SCORE,
    payload: request
  }
}

export function fetchTiles() { return { type : FETCH_TILES } };

export function moveToInPlay(tile) {
  console.log(tile)
  return {
    type : MOVE_TO_IN_PLAY,
    payload: tile
  }
}

export function moveToRack(tile) {
  return {
    type : MOVE_TO_RACK,
    payload: tile
  }
}
// export function toggleTile(tile) {
//
//   return {
//     type: TOGGLE_TILE,
//     payload: tile
//   }
// }
