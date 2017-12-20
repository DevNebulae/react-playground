import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { countReducer } from "./count"

export default combineReducers({
  count: countReducer,
  routing: routerReducer
})
