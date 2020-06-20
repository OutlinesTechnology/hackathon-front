import { postActionsTypes } from './interfaces/action.user.interfaces'
import { IDispatch } from 'store/redux.interfaces'
import { getPostsById } from 'services/restApiService'

const initState = {
  id: 0,
  load: true,
}

export const post = (state = initState, action: any): any => {
  switch (action.type) {
    case postActionsTypes.UPDATE_POST:
      return action.payload
    default:
      return state
  }
}

export const getPostByIdAction = (id: number) => (dispatch: IDispatch) => {
  dispatch({ type: postActionsTypes.UPDATE_POST, payload: { load: true } })
  getPostsById(id).then(response => {
    dispatch({
      type: postActionsTypes.UPDATE_POST,
      payload: { load: false, ...response.data.data[0] },
    })
  })
}
