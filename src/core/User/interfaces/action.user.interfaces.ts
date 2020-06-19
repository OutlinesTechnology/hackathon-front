export enum userActionsTypes {
  UPDATE_USER = 'app/core/user/UPDATE_USER',
}

export type IUpdateUser = {
  type: typeof userActionsTypes.UPDATE_USER
  payload: any
}

export type userActions = IUpdateUser
