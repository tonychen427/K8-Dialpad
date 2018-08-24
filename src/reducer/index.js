/**
 * @description Root Reducer
 */
import { combineReducers } from 'redux-immutable';
import dialer from './dialer';

const rootReducer = combineReducers({ dialer });

export default rootReducer;
