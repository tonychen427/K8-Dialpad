import React from 'react';
import { Provider } from 'react-redux';
import Keypad from './views/Keypad';
import IncomingCall from './views/IncomingCall';
import InactiveCall from  './views/InActiveCall';
import DialpadModalView from './views';
import store from './services/store';

import Dialer from './services/dialer';
import './services/fontawesome';

if (typeof window !== 'undefined') {
  if (!window.eght) {
    window.k9 = {};
  }
  window.k9.dialerStore = store;
}

const EnhancedKeypad = props => (
  <Provider store={store}>
    <Keypad {...props} />
  </Provider>
);

const EnhancedIncomingCall = props => (
  <Provider store={store}>
    <IncomingCall {...props} />
  </Provider>
);

const EnhancedInActiveCall = () => (
  <Provider store={store}>
    <InactiveCall />
  </Provider>
);

const EnhanceDialpadModalView = props => (
  <Provider store={store}>
    <DialpadModalView {...props} />
  </Provider>
)

export { EnhancedInActiveCall as Dialpad };
export { EnhancedKeypad as Keypad };
export { EnhanceDialpadModalView as DialpadModalView }
export { EnhancedIncomingCall as IncomingCall}
export default Dialer;
