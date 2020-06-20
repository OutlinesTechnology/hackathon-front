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

// posts

export const getAuthToken = (email: string, password: string) =>
  makeRequest(`user/auth`, 'POST', { email, password })

export const registerUser = (params: any) => makeRequest(`user/signup`, 'POST', params)

export const getUserProfile = () => makeRequest(`user/profile`, 'GET')

export const getPosts = () => makeRequest(`posts`, 'GET')

export const getInterestingAndExpertiseLists = () =>
  makeRequest(`user/interest_expertise_list`, 'GET')
