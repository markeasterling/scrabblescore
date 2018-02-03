import { FETCH_SCORE } from '../actions/index';

const initialState = {}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SCORE:
      return action.payload.data;
  }
  return state;
}
