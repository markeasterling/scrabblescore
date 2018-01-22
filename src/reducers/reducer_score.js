import { FETCH_SCORE } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_SCORE:
      return Object.assign({}, state, action.payload.data);
  }
  return state;
}
