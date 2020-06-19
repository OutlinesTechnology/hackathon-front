import axios, { Method } from 'axios'
import { URL } from 'utils'

export const makeRequest = (
  url: string,
  method: Method = 'GET',
  args?: any,
  params?: any
): Promise<any> => {
  const finalUrl = `api/v1/${URL}/${url}`
  return axios({
    method: method,
    url: finalUrl,
    data: { ...args },
    params: { ...params },
    withCredentials: true,
    // headers: {},
  })
}

export const createBook = (profile: any) => makeRequest(`user/auth`, 'POST', profile)

export const getAuthToken = (email: string, password: string) =>
  makeRequest(`user/auth`, 'POST', { email, password })
