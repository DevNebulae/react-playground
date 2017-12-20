import { INCREMENT_ASYNC, increment } from "../actions/counter"
import { put, takeEvery } from "redux-saga/effects"
import { delay } from "redux-saga"

export function* incrementAsync() {
  yield delay(1000)
  yield put(increment())
}

export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}
