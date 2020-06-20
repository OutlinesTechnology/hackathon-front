import { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authUserAction } from 'core/User/duck'

export const useSignInFacade = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)

  const dispatch = useDispatch()

  const changeUsername = useCallback((value: string) => setUsername(value), [])
  const changePassword = useCallback((value: string) => setPassword(value), [])

  const onClickAuthorization = useCallback(() => {
    if (username.length !== 0 || password.length !== 0) {
      dispatch(authUserAction(username, password))
    }
  }, [dispatch, username, password])

  useEffect(() => {
    if (username.length !== 0 && password.length !== 0) setDisabled(false)
    if (username.length === 0 || password.length === 0) setDisabled(true)
  }, [username, password])

  return { username, password, changeUsername, changePassword, onClickAuthorization, disabled }
}
