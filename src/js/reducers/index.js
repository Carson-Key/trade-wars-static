import { ADD_PLAYERNAME, ADD_WEBSOCKET } from '../constants/action-types'

const initialState = {
  playerName: -1,
  webSocket: new WebSocket('wss://trade-wars-backend.herokuapp.com/gameServer')
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYERNAME:
      return Object.assign({}, state, {
        playerName: state.playerName = action.payload
      })
    case ADD_WEBSOCKET:
      return Object.assign({}, state, {
        webSocket: state.webSocket = action.payload
      })
    default:
      break
  }
  return state
}

export default rootReducer
