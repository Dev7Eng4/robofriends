import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchRobotState {
  searchValue: string;
}

const initialState: SearchRobotState = {
  searchValue: "",
};

export const searchRobotSlice = createSlice({
  name: "searchRobot",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { search } = searchRobotSlice.actions;

export default searchRobotSlice.reducer;
