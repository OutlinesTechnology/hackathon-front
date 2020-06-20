import { useState } from 'react'
import { IStateSteps } from '../../SignUp/hooks/useSignUpFacade'

export const useStartProfileFacade = () => {
  const [username, setName] = useState<string>('Иван')
  const [surname, setSurname] = useState<string>('Иванов')

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
