import {
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
} from "../constants";

const initialStateRobots = {
  robots: [],
  status: "pending",
};

export const requestRobots = (state = initialStateRobots, action) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, status: "pending" };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, status: "success" };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
