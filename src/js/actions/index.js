import { ADD_PLAYERNAME, ADD_WEBSOCKET } from '../constants/action-types'

export function addPlayername(payload) {
  return { type: ADD_PLAYERNAME, payload }
};
export function addWebSocket(payload) {
  return { type: ADD_WEBSOCKET, payload }
}
