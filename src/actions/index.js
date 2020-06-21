import {
  LOGIN, LOGOUT
} from '../constants'

export function logout(action) {
  return {
    type: LOGOUT,
    payload: action.payload
  }
}

export function login(payload) {
  return {
    type: LOGIN,
    payload: action.payload
  }
}
