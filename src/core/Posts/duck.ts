import { postsActionsTypes } from './interfaces/action.user.interfaces'
import { IDispatch } from 'store/redux.interfaces'
import { getPosts } from 'services/restApiService'

export const posts = (state: any[] = [], action: any): any[] => {
  switch (action.type) {
    case postsActionsTypes.UPDATE_POSTS:
      return action.payload
    default:
      return state
  }
}

export const getPostsAction = () => (dispatch: IDispatch) => {
  getPosts().then(response => {
    dispatch({ type: postsActionsTypes.UPDATE_POSTS, payload: response.data.data })
  })
}
