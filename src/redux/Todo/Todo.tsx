import React from 'react'
import { useDispatch } from 'react-redux'
import { changeTodo, deleteTodo } from '../modules/todosSlice'
import {
  StButtonBox,
  StContainer,
  StContent,
  StDeleteButton,
  StId,
  StIsDoneButton,
  StTitle,
} from './styles'
import { TodoItem } from './types'
import toast from 'react-hot-toast'

interface TodoProps {
  item: TodoItem
  isDone: boolean
}

const Todo: React.FC<TodoProps> = ({ item, isDone }) => {
  const dispatch = useDispatch()

  const changeStateHandler = () => {
    dispatch(changeTodo(item.id))
  }

  const deleteHandler = () => {
    const isConfirmed = window.confirm('삭제하시겠습니까?')
    if (isConfirmed) {
      dispatch(deleteTodo(item.id))
    }
  }

  return (
    <StContainer>
      <StId>{item.id}</StId>
      <StTitle>{item.title}</StTitle>
      <StContent>{item.content}</StContent>
      <StButtonBox>
        <StIsDoneButton onClick={changeStateHandler}>
          {isDone ? '완료' : '취소'}
        </StIsDoneButton>
        <StDeleteButton onClick={deleteHandler}>삭제</StDeleteButton>
      </StButtonBox>
    </StContainer>
  )
}

export default Todo
