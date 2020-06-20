import { userActionsTypes, userActions } from './interfaces/action.user.interfaces'
import { IUser } from './interfaces/reducer.user.interfaces'
import { IDispatch } from 'store/redux.interfaces'
import { getAuthToken, registerUser, getUserProfile } from 'services/restApiService'
import { setCookie } from '../../utils/cookies'

const initState: IUser = {
  username: '',
  surname: '',
  email: '',
  deparmentName: '',
  expertise: [],
  interest: [],
}

export const user = (state: IUser = initState, action: userActions): IUser => {
  switch (action.type) {
    case userActionsTypes.UPDATE_USER:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const authUserAction = (email: string, password: string, call: () => void) => () => {
  getAuthToken(email, password).then(response => {
    if (response.data.status) {
      setCookie('token', response.data.data.token)
      call()
    }
  })
}

export const registerUserAction = (params: any) => (dispatch: IDispatch) => {
  registerUser(params).then(() => {
    // dispatch({ type: userActionsTypes.UPDATE_USER, payload: params })
  })
}

export const getProfile = () => (dispatch: IDispatch) => {
  getUserProfile().then(result => {
    dispatch({ type: userActionsTypes.UPDATE_USER, payload: result.data })
  })
}
