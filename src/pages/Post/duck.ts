import { postActionsTypes } from './interfaces/action.user.interfaces'
import { IDispatch } from 'store/redux.interfaces'
import { addComment, getPostsById, postSubscription } from 'services/restApiService'

const initState = {
  id: 0,
  comments: [],
  load: true,
}

export const post = (state = initState, action: any): any => {
  switch (action.type) {
    case postActionsTypes.UPDATE_POST:
      return action.payload
    case postActionsTypes.RESET_POST:
      return initState
    default:
      return state
  }
}

export const getPostByIdAction = (id: number, comment?: boolean) => (dispatch: IDispatch) => {
  if (!comment) {
    dispatch({ type: postActionsTypes.UPDATE_POST, payload: { load: true } })
  }
  getPostsById(id).then(response => {
    dispatch({
      type: postActionsTypes.UPDATE_POST,
      payload: { load: false, ...response.data.data[0] },
    })
  })
}

export const postSubscriptionAction = (id: number) => (dispatch: IDispatch) => {
  postSubscription(id).then(() => {
    dispatch(getPostByIdAction(id, true))
  })
}

export const addCommentAction = (id: number, content: string) => (dispatch: IDispatch) => {
  addComment(id, content).then(() => {
    dispatch(getPostByIdAction(id, true))
  })
}
