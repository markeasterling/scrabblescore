import { FETCH_TILES } from '../actions/index';
import { TOGGLE_TILE } from '../actions/index';

const initialState = {
  
};

export default function(state = [], action) {
  console.log(action)
  switch (action.type) {
    case FETCH_TILES:
      return [...state, ...action.payload]
    case TOGGLE_TILE:
      return state.map((tile, index) => {
        console.log(tile, index, action.payload.id)
        if (index === action.payload.id) {
          return Object.assign({}, tile, {used: !tile.used
          })
        }
        return tile
      })
    default:
      return state;
  }; 
  
  return state
};