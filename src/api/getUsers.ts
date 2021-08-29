import axios, { AxiosResponse } from "axios";
import { RobotUser } from "slices/requestRobots";

export const getUsers = async (): Promise<AxiosResponse<RobotUser[]>> => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  return users?.data;
};
