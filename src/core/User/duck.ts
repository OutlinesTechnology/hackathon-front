import {
  userActionsTypes,
  userActions
} from "./interfaces/action.user.interfaces";
import { IUser } from "./interfaces/reducer.user.interfaces";
import { IDispatch } from "store/redux.interfaces";
import { getAuthToken } from "services/restApiService";
const initState: IUser = {
  load: false,
  access: false
};

export const user = (state: IUser = initState, action: userActions): IUser => {
  switch (action.type) {
    case userActionsTypes.UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// const updateUser = (payload: any): userActions => ({
//   type: userActionsTypes.UPDATE_USER,
//   payload: payload,
// })

export const authUser = (email: string, password: string) => (
  dispatch: IDispatch
) => {
  getAuthToken(email, password)
    .then()
    .catch();
};
