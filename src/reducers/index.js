import {
  LOGIN, LOGOUT
} from '../constants'

const initialState = {
  login: false,
  logout: true
}

function rootReducers(state = initialState, action) {
  if(action.type === LOGIN) {
    return Object.assign({}, state, {
      login: true,
      logout: false
    })
  }

  if(action.type === LOGOUT) {
    return Object.assign({}, state, {
      login: false,
      logout: true
    })
  }

  return state;
}

export default rootReducers;
