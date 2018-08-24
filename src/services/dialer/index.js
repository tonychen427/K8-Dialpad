import EventEmitter from 'events';
import store from '../store/';

export class Dialer extends EventEmitter {
  constructor() {
    super();
    this.on('call-state', payload => { this.updateCallState(payload) });
  }
  updateCallState = payload => {
    store.dispatch({ type: 'SET_DIALER_INDEX', payload });
  }
  emitUIEvent = payload => {
    this.emit('uiEvent', payload );
  }
}

export default Dialer;