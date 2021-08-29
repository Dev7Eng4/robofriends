import React from "react";
import { useDispatch } from "react-redux";
import { setSearchField } from "../actions/actionThunk";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={(e) => dispatch(setSearchField(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
