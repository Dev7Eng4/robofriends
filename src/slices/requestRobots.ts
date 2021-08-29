import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  city: string;
  get: Geo;
  street: string;
  suite: string;
  zipcode: string;
}

interface Company {
  name: string;
  bs: string;
  catchPhrase: string;
}

export interface RobotUser {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: Address;
  company: Company;
}

export interface RequestRobotsState {
  robots: RobotUser[];
  status: "pending" | "success" | "failed";
  error: string;
}

const initialState: RequestRobotsState = {
  robots: [],
  status: "pending",
  error: "",
};

export const requestRobotsSlice = createSlice({
  name: "requestRobots",
  initialState,
  reducers: {
    fetchRobots: (state) => {
      state.status = "pending";
    },
    fetchRobotsSuccess: (state, action: PayloadAction<RobotUser[]>) => {
      state.robots = action.payload;
      state.status = "success";
    },
    fetchRobotsFailed: (state, action: PayloadAction<string>) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { fetchRobots, fetchRobotsSuccess, fetchRobotsFailed } = requestRobotsSlice.actions;
export default requestRobotsSlice.reducer;
