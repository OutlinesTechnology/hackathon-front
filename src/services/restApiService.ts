import axios, { Method } from 'axios'
import { URL } from 'utils'
import { getCookie } from '../utils/cookies'

export const makeRequest = (
  url: string,
  method: Method = 'GET',
  args?: any,
  params?: any
): Promise<any> => {
  const finalUrl = `${URL}/api/v1/${url}`
  return axios({
    method: method,
    url: finalUrl,
    data: { ...args },
    params: { ...params },
    headers: {
      'x-access-token': getCookie('token'),
    },
  })
}

export const getAuthToken = (email: string, password: string) =>
  makeRequest(`user/auth`, 'POST', { email, password })

export const registerUser = (params: any) => makeRequest(`user/signup`, 'POST', params)

export const getUserProfile = () => makeRequest(`user/profile`, 'GET')

export const getPosts = () => makeRequest(`posts`, 'GET')

export const addProjects = (params: any) => makeRequest(`posts`, 'POST', params)

export const getPostsById = (id: number) => makeRequest(`posts/${id}`, 'GET')

export const getPostsByDepart = (name: string) => makeRequest(`posts/filtr/${name}`, 'GET')

export const postSubscription = (postId: number) =>
  makeRequest(`posts/subscription`, 'POST', { postId })
