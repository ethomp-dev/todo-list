import * as React from 'react'
import type { TodoCollectionT } from '../index'
import todoCollectionReducer from './todoCollectionReducer'

export type TodoCollectionStateT = {
  data: TodoCollectionT
  hasError: boolean
  isLoading: boolean
}

const useTodoCollection = (
  initialState: TodoCollectionT
): [TodoCollectionStateT, any] => {
  const [todoCollection, dispatchTodoCollection] = React.useReducer(
    todoCollectionReducer,
    {
      data: initialState || [],
      hasError: false,
      isLoading: true,
    }
  )

  React.useEffect(() => {
    setTimeout(() => {
      dispatchTodoCollection({
        type: 'FETCH_TODO_COLLECTION',
        payload: JSON.parse(localStorage.getItem('todoCollection') || '[]'),
      })
    }, 2000)
  }, [])

  React.useEffect(() => {
    if (!todoCollection.isLoading) {
      localStorage.setItem(
        'todoCollection',
        JSON.stringify(todoCollection.data)
      )
    }
  }, [todoCollection])

  return [todoCollection, dispatchTodoCollection]
}

export default useTodoCollection
