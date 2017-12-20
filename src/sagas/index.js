import { incrementAsync, watchIncrementAsync } from "./count"
import { all } from "redux-saga/effects"

export default function* rootSaga() {
  yield all([watchIncrementAsync()])
}
