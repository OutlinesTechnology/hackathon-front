import { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { optionsData } from '../../SignUp/utils'
import { optionsBudgetData } from '../utils'
import { IStateSteps } from '../../SignUp/hooks/useSignUpFacade'
import { addPostAction } from 'core/Posts/duck'
import { useHistory } from 'react-router-dom'
export const useCreateProjectFacade = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [isActiveFirst, setActiveFirst] = useState<boolean>(true)
  const [disabled, setDisabled] = useState<boolean>(true)

  const [projectArea, setProjectArea] = useState(optionsData)
  const [budget, setBudget] = useState(optionsBudgetData)

  const [nameProject, setNameProject] = useState<string>('')
  const [ideaProject, setIdeaProject] = useState<string>('')
  const [resultProject, setResultProject] = useState<string>('')

  const [free, setFree] = useState<string>('')

  const stateCreateProject: IStateSteps = {
    switch: {
      value: isActiveFirst,
      set: setActiveFirst,
    },
    budget: {
      value: budget,
      set: setBudget,
    },
    projectArea: {
      value: projectArea,
      set: setProjectArea,
    },
    nameProject: {
      value: nameProject,
      set: setNameProject,
    },
    ideaProject: {
      value: ideaProject,
      set: setIdeaProject,
    },
    resultProject: {
      value: resultProject,
      set: setResultProject,
    },
    free: {
      value: free,
      set: setFree,
    },
  }

  useEffect(() => {
    if (
      nameProject.length !== 0 &&
      ideaProject.length !== 0 &&
      resultProject.length !== 0 &&
      projectArea.length === 1 &&
      budget.length === 1
    )
      setDisabled(false)
    if (
      nameProject.length === 0 ||
      ideaProject.length === 0 ||
      resultProject.length === 0 ||
      projectArea.length !== 1 ||
      budget.length !== 1
    )
      setDisabled(true)
  }, [budget, projectArea, nameProject, ideaProject, resultProject])

  const addProject = useCallback(() => {
    if (!disabled) {
      dispatch(
        addPostAction({
          type: isActiveFirst,
          title: nameProject,
          ideaDescription: ideaProject,
          awaitedResult: resultProject,
          commentBox: free,
          interest: [projectArea[0].value],
          expertise: [],
          budget: budget[0].value,
          department: 0,
        })
      )
      history.push('/next')
    }
  }, [
    isActiveFirst,
    budget,
    projectArea,
    ideaProject,
    resultProject,
    nameProject,
    disabled,
    free,
    dispatch,
    history,
  ])

  return { stateCreateProject, disabled, addProject }
}
