import axios from 'axios';

const ROOT_URL = `http://localhost:8080/scrabbleScore`

export const FETCH_SCORE = 'FETCH_SCORE';

export function fetchScore(word) {
  const url = `${ROOT_URL}?word=${word}`
  const request = axios.get(url)
  console.log(`fetch the score for ${word}`, request);

  return {
    type: FETCH_SCORE,
    payload: request
  }
}
