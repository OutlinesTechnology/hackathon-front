import { IStoreState } from 'store/store.interfaces'
import { IUser } from './interfaces/reducer.user.interfaces'

export const getUser = (state: IStoreState): IUser => state.user
