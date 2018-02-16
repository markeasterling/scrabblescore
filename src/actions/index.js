import axios from 'axios';

const ROOT_URL = `http://localhost:8080/scrabbleScore`
const distribution = ['e','e','e','e','e','e','e','e','e','e','e','e','a','a','a','a','a','a','a','a','a','i','i','i','i','i','i','i','i','i','o','o','o','o','o','o','o','o','n','n','n','n','n','n','r','r','r','r','r','r','t','t','t','t','t','t','l','l','l','l','s','s','s','s','u','u','u','u','d','d','d','d','g','g','g','b','b','c','c','m','m','p','p','f','f','h','h','v','v','w','w','y','y','k','j','x','q','z']
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

// export function fetchTiles() {
//   console.log('in fetch tiles')
//   var tileBag = distribution.slice()
//   let n = 0;
//   let selectedTiles = [];
//   while (n < tilesToDraw) {
//     const randomIndex = Math.floor(Math.random() * tileBag.length)
//     const rand = tileBag[randomIndex];
//     selectedTiles.push({'id': n, 'tile': rand, 'used': false});
//     tileBag.slice(randomIndex,1)
//     n++
//   }
//   return {
//     type: FETCH_TILES,
//     payload: selectedTiles
//   }
// }

export function fetchTiles() { return { type : FETCH_TILES } };

export function toggleTile(tile) {

  return {
    type: TOGGLE_TILE,
    payload: tile
  }
}
