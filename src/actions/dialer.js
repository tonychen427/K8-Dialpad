export const SET_DIALER_INDEX = 'SET_DIALER_INDEX';
export const SET_VIEWS = 'SET_VIEWS';
export function setDialerIndex (index) {
  return {
    type: SET_DIALER_INDEX,
    index,
  }
}
