import { all } from "redux-saga/effects";

import Reserve from './reserve/sagas'

export default function* rootSaga() {
  return yield all([
    Reserve,
  ])
}