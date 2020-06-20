import React, { useState } from 'react'
import { Input, Button, H3, Switch, InputSuggest } from '@holism/core'
import styled from 'styled-components'
import { Link as LinkDom } from 'react-router-dom'
import { optionsData } from '../../Main/utils'
import { getSuggestions, IPropsItem } from '../../SignUp/utils'
import { optionsBudgetData } from '../utils'

export const CreateProject: React.FC = (): JSX.Element => {
  const [isActiveFirst, setActiveFirst] = useState<boolean>(true)
  const [stateOne, setStateOne] = useState(optionsData)
  const [stateTwo, setStateTwo] = useState(optionsBudgetData)

  return (
    <>
      <HeaderBg>
        <Header>
          <LinkReg>
            <Link to={'/'}>Назад</Link>
          </LinkReg>

          <Title>
            <H3>Создание проекта</H3>
          </Title>
        </Header>
      </HeaderBg>
      <Content>
        <Form>
          <Row>
            <Switch
              labelOn={'Инициатива / Идея'}
              checked={isActiveFirst}
              onChange={(evt, isChecked) => {
                setActiveFirst(isChecked)
              }}
            />
          </Row>

          <Row>
            <Input
              placeholder="Название"
              value={''}
              type="text"
              onChange={(e: React.ChangeEvent<any>, val: string) => val}
            />
          </Row>

          <Row>
            <Input
              placeholder="Идея проекта и какую проблему он решает"
              value={''}
              type="text"
              onChange={(e: React.ChangeEvent<any>, val: string) => val}
            />
          </Row>

          <Row>
            <Input
              placeholder="Ожидаемый результат/ценность/выгода проекта?"
              value={''}
              type="text"
              onChange={(e: React.ChangeEvent<any>, val: string) => val}
            />
          </Row>

          <Row>
            <InputSuggest
              width="100%"
              onChange={val => {
                const isFoundSuggestions = optionsData.some(
                  (el: IPropsItem) =>
                    typeof el.label === 'string' && el.label.includes(val.toLocaleLowerCase())
                )

                isFoundSuggestions ? setStateOne(getSuggestions(val, optionsData)) : setStateOne([])
              }}
              getSuggestionsProp={getSuggestions}
              onSelect={item => console.log('onSelect', item)}
              options={stateOne}
              placeholder="Введите название проекта, профессии или ключевое слово"
              noOptionsMessage="Ничего не найдено"
            />
          </Row>

          <Row>
            <InputSuggest
              width="100%"
              onChange={val => {
                const isFoundSuggestions = optionsBudgetData.some(
                  (el: IPropsItem) =>
                    typeof el.label === 'string' && el.label.includes(val.toLocaleLowerCase())
                )

                isFoundSuggestions
                  ? setStateTwo(getSuggestions(val, optionsBudgetData))
                  : setStateTwo([])
              }}
              getSuggestionsProp={getSuggestions}
              onSelect={item => console.log('onSelect', item)}
              options={stateTwo}
              placeholder="Ожидаемый бюджет"
              noOptionsMessage="Ничего не найдено"
            />
          </Row>

          <Row>
            <Input
              placeholder="Свободное поле"
              value={''}
              type="text"
              onChange={(e: React.ChangeEvent<any>, val: string) => val}
            />
          </Row>
          <Row>
            <Button dimension="medium" color="secondary" onClick={() => false}>
              Опубликовать
            </Button>
          </Row>
        </Form>
      </Content>
    </>
  )
}

const Form = styled.div`
  margin: 10px;
  width: 600px;
`

const Row = styled.div`
  margin: 10px 0 10px 0;
  width: 100%;
`

const Title = styled.div``

const LinkReg = styled.div`
  display: inline-block;
  margin-left: 1em;
`

const Link = styled(LinkDom)`
  text-decoration: none;
  font-family: 'Proxima Nova', sans-serif;
  cursor: pointer;
  color: #0057b6;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
`

const HeaderBg = styled.div`
  min-height: 1em;
  background-color: #e9f1f9;
  padding: 5px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
