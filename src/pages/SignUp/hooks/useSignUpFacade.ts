import { useState, useCallback } from 'react'

export const useSignUpFacade = () => {
  const [step, setStep] = useState<number>(1)
  const stepsTotal = 3

  const changeStep = useCallback(
    value => {
      setStep(value)
    },
    [setStep]
  )

  return {
    stepsTotal,
    step,
    changeStep,
  }
}
