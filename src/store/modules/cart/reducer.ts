import { Reducer } from "redux";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = () => {
  return {
    items: [],
  };
};

export default cart;
