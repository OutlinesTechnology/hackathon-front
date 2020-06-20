import { useState, useCallback } from 'react'
import { IPropsItem, optionsData } from '../utils'
// import { registerUserAction } from '../../../core/User/duck'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
// import { getIds } from '../utils'

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
  const [disabledStep, setDisabledStep] = useState<boolean>(false)

  const stepsTotal = 2

  const changeStep = useCallback(value => {
    setStep(value)
  }, [])

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

  const registrationOnClick = useCallback(() => {
    if (!disabledStep) {
      // dispatch(
      //   registerUserAction({
      //     email: email,
      //     password: password,
      //     firstName: username,
      //     surname: surname,
      //     deparmentName: department,
      //     expertise: getIds(expertiseUserList),
      //     interest: getIds(interestsUserList),
      //   })
      // )
      history.push('/')
    }
  }, [dispatch, history, interestsUserList, expertiseUserList, disabledStep])

  return {
    stepsTotal,
    step,
    changeStep,
    stateTwoStep,
    stateThreeStep,
    disabledStep,
    registrationOnClick,
  }
}
