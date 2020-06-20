import React, { useEffect } from 'react'
import { Button, H1, H3, Input, Paragraph } from '@holism/core'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { getPostByIdAction, postSubscriptionAction } from '../duck'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getPost } from '../selectors'
import { Link as LinkDom } from 'react-router-dom'
import { postActionsTypes } from '../interfaces/action.user.interfaces'

export const Post: React.FC = (): JSX.Element => {
  const params = useParams<any>()
  const dispatch = useDispatch()
  const post = useSelector(getPost, shallowEqual)

  useEffect(() => {
    dispatch(getPostByIdAction(params.id))
    return () => {
      dispatch({
        type: postActionsTypes.UPDATE_POST,
        payload: { load: false },
      })
    }
  }, [dispatch, params])

  return (
    <>
      <HeaderBg>
        <Header>
          <LinkReg>
            <Link to={'/'}>Назад</Link>
          </LinkReg>

          <Button dimension={'small'} onClick={() => dispatch(postSubscriptionAction(post.id))}>
            Участовать
          </Button>
          <TitleHead>
            <H3>Просмотр проекта</H3>
          </TitleHead>
        </Header>
      </HeaderBg>
      <Content>
        <Form>
          <Title>
            <H1>{post.title}</H1>
          </Title>
          <Paragraph size={16} lineHeight={24}>
            Давайте заполним для знакомства :)
          </Paragraph>

          <Row>
            <Title>
              <H3>Идея проект и какую проблему он решает</H3>
            </Title>
            <Paragraph size={16} lineHeight={24}>
              Давайте заполним для знакомства :)
            </Paragraph>
          </Row>

          <Row>
            <Title>
              <H3>Ожидаемый результат/ценность/выгода проекта</H3>
            </Title>
            <Paragraph size={16} lineHeight={24}>
              Давайте заполним для знакомства :)
            </Paragraph>
          </Row>

          <Row>
            <Paragraph size={16} lineHeight={24}>
              Проектная область - финансы
            </Paragraph>
          </Row>

          <Row>
            <Paragraph size={16} lineHeight={24}>
              Проектная область - финансы
            </Paragraph>
          </Row>

          <Row>
            <Paragraph size={16} lineHeight={24}>
              Ожидаемый бюджет
            </Paragraph>
          </Row>

          <Row>
            <Title>
              <H3>Комментарий</H3>
            </Title>
            <Paragraph size={16} lineHeight={24}>
              Давайте заполним для знакомства :)
            </Paragraph>
          </Row>
          <Row>
            <Comments>
              <Comment>
                <Author>Natalia</Author>
                <Text>lalalalal</Text>
              </Comment>
            </Comments>
            <AddComment>
              <Input />
            </AddComment>
          </Row>
        </Form>
      </Content>
    </>
  )
}

const AddComment = styled.div``

const Author = styled.div``

const Comment = styled.div``

const Comments = styled.div``

const Text = styled.div``

const Form = styled.div`
  margin: 10px;
  max-width: 600px;
`

const Row = styled.div`
  margin: 10px 0 10px 0;
  max-width: 600px;
  border-bottom: 1px solid #545454;
`

const Title = styled.div`
  margin: 10px 0 20px 0;
  max-width: 600px;
  font-family: Proxima Nova, sans-serif;
`

const TitleHead = styled.div`
  font-family: Proxima Nova, sans-serif;
`

const LinkReg = styled.div`
  display: inline-block;
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
  max-width: 600px;
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
