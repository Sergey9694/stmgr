import { all } from "redux-saga/effects";
import { countWatcher } from "./countSaga";
import { userWatcher } from "./userSaga";

// своего рода комбайн для watchers
export function* rootWatcher() {
    yield all([countWatcher(), userWatcher()]);
}
