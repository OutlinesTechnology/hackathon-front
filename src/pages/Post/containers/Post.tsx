import React, { useEffect, useState } from 'react'
import { Button, H1, H3, Input, Paragraph, ButtonGroup } from '@holism/core'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { getPostByIdAction, postSubscriptionAction, addCommentAction } from '../duck'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getPost } from '../selectors'
import { Link as LinkDom } from 'react-router-dom'
import { postActionsTypes } from '../interfaces/action.user.interfaces'
import moment from 'moment'

const buttonGroup = [
  { id: 'firstItem', label: 'Не перспективно' },
  { id: 'thirdItem', label: 'Перспективно' },
]

export const Post: React.FC = (): JSX.Element => {
  const params = useParams<any>()
  const dispatch = useDispatch()
  const post = useSelector(getPost, shallowEqual)
  const [comment, setComment] = useState('')

  useEffect(() => {
    dispatch(getPostByIdAction(params.id))
    return () => {
      dispatch({
        type: postActionsTypes.RESET_POST,
      })
    }
  }, [dispatch, params])

  if (post.load === true) return <></>

  return (
    <>
      <HeaderBg>
        <Header>
          <LinkReg>
            <Link to={'/'}>Назад</Link>
          </LinkReg>

          <Button
            dimension={'small'}
            onClick={() => !post.participant && dispatch(postSubscriptionAction(post.id))}
            view="rounded"
            color="secondary"
          >
            {post.participant ? 'Я в проекте' : 'Участвовать'}
          </Button>
        </Header>
      </HeaderBg>
      <Content>
        <Form>
          <Title>
            <H1>{post.title}</H1>
          </Title>
          <Tags>
            {post.interest.map((item: string, key: number) => (
              <Tag key={key}>{item}</Tag>
            ))}
          </Tags>
          <Row>
            <Paragraph size={16} lineHeight={24}>
              Идея проекта: {post.idea_description}
            </Paragraph>
          </Row>

          <Row>
            <Paragraph size={16} lineHeight={24}>
              Ожидаемый результат: {post.awaited_result}
            </Paragraph>
          </Row>

          <Row>
            <Paragraph size={16} lineHeight={24}>
              Департамент: {post.department_name}
            </Paragraph>
          </Row>

          <Row>
            <Paragraph size={16} lineHeight={24}>
              Комментарий автора: {post.comment_box}
            </Paragraph>
          </Row>

          <Row>
            <Paragraph size={16} lineHeight={24}>
              Ожидаемый бюджет: {post.budget}
            </Paragraph>
          </Row>

          <Row>
            <Title>
              <H3>Оценить проект</H3>
            </Title>
            <Paragraph size={16} lineHeight={24}>
              Перспективность
            </Paragraph>
            <ButtonGroup
              items={buttonGroup}
              dimension="micro"
              onChange={({ id, label }) => {
                console.log('selected item: ', { id, label })
              }}
            />
          </Row>

          <Row>
            <Title>
              <H3>Комментарии</H3>
            </Title>
          </Row>

          <Row>
            <Comments>
              {post.comments.map((item: any, key: number) => (
                <Item key={key}>
                  <Flex>
                    <RightComment>
                      <User>{item.first_name}:</User>
                      <Text>{item.content}</Text>
                    </RightComment>
                    <Date>{moment(item.date).format('DD.MM.YYYY')}</Date>
                  </Flex>
                </Item>
              ))}
            </Comments>
            <AddComment>
              <Input
                placeholder="Комментарий"
                dimension={'small'}
                value={comment}
                onChange={(e, val) => setComment(val)}
              />
              <Button
                dimension={'small'}
                onClick={() => {
                  dispatch(addCommentAction(post.id, comment))
                  setComment('')
                }}
                disabled={comment.length <= 0}
              >
                Отправить
              </Button>
            </AddComment>
          </Row>
        </Form>
      </Content>
    </>
  )
}

const Tags = styled.div`
  display: flex;
  align-items: center;
`

const Tag = styled.div`
  border-radius: 9.1px;
  background-color: #e9f1f9;
  font-size: 0.6em;
  letter-spacing: 0.07px;
  color: rgba(0, 12, 26, 0.8);
  align-items: center;
  justify-content: center;
  padding: 4px;
`

const RightComment = styled.div`
  display: flex;
`

const Date = styled.div`
  font-size: 0.8em;
`

const Text = styled.div`
  margin-left: 0.5em;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Item = styled.div`
  color: #000;
  height: 30px;
  width: 100%;
  margin-bottom: 10px;
  font-family: 'Proxima Nova', sans-serif;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #262c40;
  justify-content: space-between;
`

const AddComment = styled.div`
  display: flex;
`

const User = styled.div`
  font-size: 0.7em;
  font-weight: normal;
`

const Comments = styled.div``

const Form = styled.div`
  margin: 10px;
  width: 500px;
`

const Row = styled.div`
  margin: 10px 0 10px 0;
  width: 500px;
`

const Title = styled.div`
  margin: 10px 0 20px 0;
  width: 500px;
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
  width: 500px;
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
