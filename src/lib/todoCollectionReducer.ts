import { uid } from 'uid'
import { TodoCollectionT } from '..'

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
    // TODO: implement ADD_TODO_LIST action type
    case 'ADD_TODO_LIST':
      return {
        ...state,
      }
    case 'ADD_TODO_ITEM':
      const list = newData[action.payload.listIndex]
      list.items.push({
        id: uid(),
        summary: action.payload.itemSummary,
        completed: false,
      })

      return {
        ...state,
        data: newData,
      }
    // TODO: implement REMOVE_TODO_ITEM action type
    case 'REMOVE_TODO_ITEM':
      return {
        ...state,
      }
    default:
      return state
  }
}

export default todoCollectionReducer
