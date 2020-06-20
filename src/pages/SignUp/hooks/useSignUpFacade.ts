import { useState, useCallback } from 'react'
import { optionsData } from '../utils'

export const useSignUpFacade = () => {
  const [step, setStep] = useState<number>(1)
  const stepsTotal = 3

  const changeStep = useCallback(
    value => {
      setStep(value)
    },
    [setStep]
  )
  const [username, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [department, setDepartment] = useState<string>('')

  const stateOneStep = {
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

  const [interestsList, setInterestsList] = useState<any>(optionsData)
  const [interestsUserList, setInterestsUserList] = useState<any>([])

  const stateTwoStep = {
    options: {
      value: interestsList,
      set: setInterestsList,
    },
    userList: {
      value: interestsUserList,
      set: setInterestsUserList,
    },
  }

  const [expertiseList, setIExpertiseList] = useState<any>(optionsData)
  const [expertiseUserList, setExpertiseUserList] = useState<any>([])

  const stateThreeStep = {
    options: {
      value: expertiseList,
      set: setIExpertiseList,
    },
    userList: {
      value: expertiseUserList,
      set: setExpertiseUserList,
    },
  }

  return {
    stepsTotal,
    step,
    changeStep,
    stateOneStep,
    stateTwoStep,
    stateThreeStep,
  }
}
