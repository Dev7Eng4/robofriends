import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import CardList from "components/CardList";
import Scroll from "components/Scroll";
import SearchBox from "components/SearchBox";
import { fetchRobots } from "slices/requestRobots";

const Robot = () => {
  const dispatch = useAppDispatch();
  const searchField = useAppSelector((state: RootState) => state.search.searchValue);
  const { status, error, robots } = useAppSelector((state: RootState) => state.fetch);

  useEffect(() => {
    dispatch(fetchRobots());
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  if (status === "pending") {
    return <h1>Loading...</h1>;
  }

  return status === "success" ? (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  ) : (
    <>
      <h1>Error while get data from API!</h1>
      <p>{error}</p>
    </>
  );
};

export default Robot;
