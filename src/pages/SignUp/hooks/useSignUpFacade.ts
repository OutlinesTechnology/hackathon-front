import { useState, useCallback, useEffect } from 'react'
import { IPropsItem, optionsData } from '../utils'
import { registerUserAction } from '../../../core/User/duck'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export interface IStateSteps {
  [key: string]: {
    value: string | IPropsItem[] | any
    set: (value: string | IPropsItem[] | any) => void
  }
}

export const useSignUpFacade = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [step, setStep] = useState<number>(1)
  const [disabledStep, setDisabledStep] = useState<boolean>(true)

  const stepsTotal = 3

  const changeStep = useCallback(value => {
    setStep(value)
    setDisabledStep(true)
  }, [])

  const [username, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [department, setDepartment] = useState<string>('')

  const stateOneStep: IStateSteps = {
    username: {
      value: username,
      set: setName,
    },
    surname: {
      value: surname,
      set: setSurname,
    },
    department: {
      value: department,
      set: setDepartment,
    },
  }

  const [interestsList, setInterestsList] = useState<IPropsItem[]>(optionsData)
  const [interestsUserList, setInterestsUserList] = useState<any>([])

  const stateTwoStep: IStateSteps = {
    options: {
      value: interestsList,
      set: setInterestsList,
    },
    userList: {
      value: interestsUserList,
      set: setInterestsUserList,
    },
  }

  const [expertiseList, setIExpertiseList] = useState<IPropsItem[]>(optionsData)
  const [expertiseUserList, setExpertiseUserList] = useState<any>([])

  const stateThreeStep: IStateSteps = {
    options: {
      value: expertiseList,
      set: setIExpertiseList,
    },
    userList: {
      value: expertiseUserList,
      set: setExpertiseUserList,
    },
  }

  useEffect(() => {
    if ((username.length === 0 || surname.length === 0 || department.length === 0) && step === 1)
      setDisabledStep(true)

    if (username.length !== 0 && surname.length !== 0 && department.length !== 0 && step === 1)
      setDisabledStep(false)

    if (interestsUserList.length === 0 && step === 2) setDisabledStep(true)
    if (expertiseUserList.length === 0 && step === 3) setDisabledStep(true)

    if (interestsUserList.length !== 0 && step === 2) setDisabledStep(false)
    if (expertiseUserList.length !== 0 && step === 3) setDisabledStep(false)
  }, [username, surname, department, interestsUserList, expertiseUserList, step])

  const registrationOnClick = useCallback(() => {
    if (!disabledStep) {
      dispatch(
        registerUserAction({
          email: 'email',
          password: 'string',
          firstName: username,
          surname: surname,
          deparmentName: department,
          expertise: [],
          interest: [],
        })
      )
      history.push('/signin')
    }
  }, [
    dispatch,
    history,
    username,
    surname,
    department,
    // interestsUserList,
    // expertiseUserList,
    disabledStep,
  ])

  return {
    stepsTotal,
    step,
    changeStep,
    stateOneStep,
    stateTwoStep,
    stateThreeStep,
    disabledStep,
    registrationOnClick,
  }
}
