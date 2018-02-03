import { combineReducers } from 'redux';
import score from './reducer_score';
import tiles from './reducer_tiles';




const rootReducer = combineReducers({
  tiles,
  score
});

export default rootReducer;
