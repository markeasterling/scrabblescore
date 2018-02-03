import axios from 'axios';

const ROOT_URL = `http://localhost:8080/scrabbleScore`
const distribution = ['e','e','e','e','e','e','e','e','e','e','e','e','a','a','a','a','a','a','a','a','a','i','i','i','i','i','i','i','i','i','o','o','o','o','o','o','o','o','n','n','n','n','n','n','r','r','r','r','r','r','l','l','l','l','s','s','s','s','u','u','u','u','d','d','d','d','g','g','g','b','b','c','c','m','m','p','p','f','f','h','h','v','v','w','w','y','y','k','j','x','q','z'];
const tilesToDraw = 7;


export const FETCH_SCORE = 'FETCH_SCORE';
export const FETCH_TILES = 'FETCH_TILES';
export const TOGGLE_TILE = 'TOGGLE_TILE';

export function fetchScore(word) {
  const url = `${ROOT_URL}?word=${word}`
  const request = axios.get(url)
  console.log(`fetch the score for ${word}`, request);

  return {
    type: FETCH_SCORE,
    payload: request
  }
}

export function fetchTiles() {
  //does not currently update tilebag (could have 2 q's)
  console.log('in fetch tiles')
  const tileBag = distribution.slice()
  let n = 0;
  let selectedTiles = [];
  while (n < tilesToDraw) {
    var rand = tileBag[Math.floor(Math.random() * tileBag.length)];
    selectedTiles.push({'id': n, 'tile': rand, 'used': false});
    n++
  }
  console.log(selectedTiles)

  return {
    type: FETCH_TILES,
    payload: selectedTiles
  }
}

export function toggleTile(tile) {
  
  return {
    type: TOGGLE_TILE,
    payload: tile
  }
}


