import React from 'react'
import { Input, Button, H3, Switch, InputSuggest } from '@holism/core'
import styled from 'styled-components'
import { Link as LinkDom } from 'react-router-dom'
import { getSuggestions, IPropsItem, optionsData } from '../../SignUp/utils'
import { optionsBudgetData } from '../utils'
import { useCreateProjectFacade } from '../hooks'

export const CreateProject: React.FC = (): JSX.Element => {
  const { stateCreateProject, disabled, addProject } = useCreateProjectFacade()

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
              checked={stateCreateProject['switch'].value}
              onChange={(evt, isChecked) => {
                stateCreateProject['switch'].set(isChecked)
              }}
            />
          </Row>

          <Row>
            <Input
              placeholder="Название"
              value={stateCreateProject['nameProject'].value}
              type="text"
              onChange={(e: React.ChangeEvent<any>, val: string) =>
                stateCreateProject['nameProject'].set(val)
              }
            />
          </Row>

          <Row>
            <Input
              placeholder="Идея проекта и какую проблему он решает"
              value={stateCreateProject['ideaProject'].value}
              type="text"
              onChange={(e: React.ChangeEvent<any>, val: string) =>
                stateCreateProject['ideaProject'].set(val)
              }
            />
          </Row>

          <Row>
            <Input
              placeholder="Ожидаемый результат/ценность/выгода проекта?"
              value={stateCreateProject['resultProject'].value}
              type="text"
              onChange={(e: React.ChangeEvent<any>, val: string) =>
                stateCreateProject['resultProject'].set(val)
              }
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

                isFoundSuggestions
                  ? stateCreateProject['projectArea'].set(getSuggestions(val, optionsData))
                  : stateCreateProject['projectArea'].set([])
              }}
              getSuggestionsProp={getSuggestions}
              onSelect={item => console.log('onSelect', item)}
              options={stateCreateProject['projectArea'].value}
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
                  ? stateCreateProject['budget'].set(getSuggestions(val, optionsBudgetData))
                  : stateCreateProject['budget'].set([])
              }}
              getSuggestionsProp={getSuggestions}
              onSelect={item => console.log('onSelect', item)}
              options={stateCreateProject['budget'].value}
              placeholder="Ожидаемый бюджет"
              noOptionsMessage="Ничего не найдено"
            />
          </Row>

          <Row>
            <Input
              placeholder="Комментарий"
              value={stateCreateProject['free'].value}
              type="text"
              onChange={(e: React.ChangeEvent<any>, val: string) =>
                stateCreateProject['free'].set(val)
              }
            />
          </Row>
          <Row>
            <Button dimension="medium" color="secondary" onClick={addProject} disabled={disabled}>
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
