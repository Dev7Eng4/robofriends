import React from "react";
import { useAppDispatch } from "app/hooks";
import { search } from "slices/searchRobot";
// import { setSearchField } from "../actions/actionThunk";

const SearchBox = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={(e) => dispatch(search(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
