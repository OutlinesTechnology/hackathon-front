import { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authUserAction } from 'core/User/duck'

export const useCreateProjectFacade = () => {
  const [isActiveSwitch, setActiveSwitch] = useState<boolean>(true)
  const [password, setPassword] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)

  // const onClickAuthorization = useCallback(() => {
  //   if (username.length !== 0 || password.length !== 0) {
  //     dispatch(authUserAction(username, password))
  //   }
  // }, [dispatch, username, password])

  // useEffect(() => {
  //   if (username.length !== 0 && password.length !== 0) setDisabled(false)
  //   if (username.length === 0 || password.length === 0) setDisabled(true)
  // }, [username, password])

  return { password }
}
