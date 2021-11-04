import { Actions } from "../actions";
import { ActionsType } from "../action-types";

const initialState = 0;

export const bankReducer = (state: number = initialState, action: Actions) => {
  switch (action.type) {
    case ActionsType.DEPOSITE:
      return state + action.payload;
    case ActionsType.WITHDRAW:
      return state - action.payload;
    case ActionsType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};
