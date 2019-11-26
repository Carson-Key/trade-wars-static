import { ADD_PLAYERNAME } from '../constants/action-types'

const initialState = {
  playerName: -1
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYERNAME:
      return Object.assign({}, state, {
        playerName: state.playerName = action.payload
      })
    default:
      break
  }
  return state
}

export default rootReducer
