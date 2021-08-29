import { call, put, takeLatest } from "redux-saga/effects";

import { getUsers } from "../api/getUsers";
import { fetchRobots, fetchRobotsFailed, fetchRobotsSuccess } from "slices/requestRobots";

function* fetchUsers() {
  try {
    // @ts-ignore
    const users = yield call(getUsers);
    yield put(fetchRobotsSuccess(users));
  } catch (error) {
    yield put(fetchRobotsFailed(error));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchRobots, fetchUsers);
  // yield all([sayHello(), fetchUsers()]);
}
