import { useState } from 'react'
import { IStateSteps } from '../../SignUp/hooks/useSignUpFacade'

export const useStartProfileFacade = () => {
  const [username, setName] = useState<string>('Максим')
  const [surname, setSurname] = useState<string>('Максимов')

  const stateProfile: IStateSteps = {
    username: {
      value: username,
      set: setName,
    },
    surname: {
      value: surname,
      set: setSurname,
    },
  }

  return { stateProfile }
}
