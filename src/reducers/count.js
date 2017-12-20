import { INCREMENT, DECREMENT } from "../actions/counter"

export function countReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return ++state
    case DECREMENT:
      return --state
    default:
      return state
  }
}
