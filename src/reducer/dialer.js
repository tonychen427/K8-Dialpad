/**
  * @module dialer
  * @description dialer(state=[], action);
  */
import Immutable from 'immutable';
import {
  SET_DIALER_INDEX,
  SET_VIEWS,
} from '../actions/dialer';

const initialState = Immutable.Map({
  dialerIndex: 0,
  view: 'INCOMINGCALL',
});

function dialer(state = initialState, action) {
  switch (action.type) {
    case SET_DIALER_INDEX: {
      return state.set('dialerIndex', action.payload.index);
    }
    case SET_VIEWS: {
      return state.set('view', action.view);
    }
    default:
      return state;
  }
}

export default dialer;
