import React from 'react'
import { InputSuggest, Chips } from '@holism/core'
import styled from 'styled-components'
import { getSuggestions, optionsData, IPropsItem } from '../utils'
import { IStateSteps } from '../hooks/useSignUpFacade'

interface Props {
  eventsAndData: IStateSteps
}

export const StepTwo: React.FC<Props> = ({ eventsAndData }): JSX.Element => {
  return (
    <>
      <Row>
        <InputSuggest
          onChange={val => {
            const isFoundSuggestions = optionsData.some(
              (el: IPropsItem) =>
                typeof el.label === 'string' && el.label.includes(val.toLocaleLowerCase())
            )

            isFoundSuggestions
              ? eventsAndData['options'].set(getSuggestions(val, optionsData))
              : eventsAndData['options'].set([])
          }}
          getSuggestionsProp={getSuggestions}
          // Todo: holism error types ( onSelect?: (item: IPropsItem[]) => void; )
          onSelect={(item: any | IPropsItem) => {
            eventsAndData['userList'].set([
              ...eventsAndData['userList'].value,
              { id: item.value, label: item.label },
            ])
          }}
          options={eventsAndData['options'].value}
          placeholder="Ваши интересы"
          noOptionsMessage="Ничего не найдено"
        />
      </Row>
      <Row>
        <Chips
          items={eventsAndData['userList'].value}
          onRemoveItem={id => {
            const index = eventsAndData['userList'].value.findIndex(
              (el: IPropsItem) => el.id === id
            )

            eventsAndData['userList'].value.splice(index, 1)
            eventsAndData['userList'].set([...eventsAndData['userList'].value])
          }}
        />
      </Row>
    </>
  )
}

const Row = styled.div`
  margin: 10px 0 10px 0;
  max-width: 360px;
`
