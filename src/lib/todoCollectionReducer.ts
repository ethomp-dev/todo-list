import { uid } from 'uid'
import type { TodoCollectionT, TodoListItemT } from '../index'

const todoCollectionReducer = (
  state: {
    data: TodoCollectionT
    hasError: boolean
    isLoading: boolean
  },
  action: {
    type: string
    payload: any
  }
) => {
  const newData = JSON.parse(JSON.stringify(state.data))

  switch (action.type) {
    case 'FETCH_TODO_COLLECTION':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      }

    case 'ADD_TODO_LIST':
      return {
        ...state,
        data: [
          ...newData,
          {
            ...action.payload.list,
            items: [],
          },
        ],
      }

    case 'REMOVE_TODO_LIST':
      newData.splice(action.payload.listIndex, 1)
      return {
        ...state,
        data: newData,
      }

    case 'ADD_TODO_ITEM':
      const itemAddList = newData[action.payload.listIndex]
      itemAddList.items.push({
        id: uid(),
        summary: action.payload.itemSummary,
        completed: false,
      })
      return {
        ...state,
        data: newData,
      }

    case 'REMOVE_TODO_ITEM':
      const itemRemoveList = newData[action.payload.listIndex]
      itemRemoveList.items = itemRemoveList.items.filter(
        (item: TodoListItemT) => item.id !== action.payload.itemId
      )
      return {
        ...state,
        data: newData,
      }

    case 'UPDATE_TODO_ITEM':
      const itemUpdateList = newData[action.payload.listIndex]
      itemUpdateList.items = itemUpdateList.items.map((item: TodoListItemT) =>
        item.id === action.payload.item.id ? action.payload.item : item
      )
      return {
        ...state,
        data: newData,
      }

    default:
      return state
  }
}

export default todoCollectionReducer
