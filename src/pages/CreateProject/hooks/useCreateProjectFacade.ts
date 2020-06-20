import { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { optionsData } from '../../Main/utils'
import { optionsBudgetData } from '../utils'

export const useCreateProjectFacade = () => {
  const [isActiveFirst, setActiveFirst] = useState<boolean>(true)

  const [stateOne, setStateOne] = useState(optionsData)
  const [budget, setBudget] = useState(optionsBudgetData)
  // const [nameProject, setNameProject] = useState<string>('')
  // const [nameProject, setNameProject] = useState<string>('')
  // const [nameProject, setNameProject] = useState<string>('')

  // const onClickAuthorization = useCallback(() => {
  //   if (username.length !== 0 || password.length !== 0) {
  //     dispatch(authUserAction(username, password))
  //   }
  // }, [dispatch, username, password])

  // useEffect(() => {
  //   if (username.length !== 0 && password.length !== 0) setDisabled(false)
  //   if (username.length === 0 || password.length === 0) setDisabled(true)
  // }, [username, password])

  return { isActiveFirst }
}
