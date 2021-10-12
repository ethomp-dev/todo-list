export type TodoCollectionT = Array<TodoListT>

export type TodoListT = {
  color?: string
  icon?: string
  items: Array<TodoListItemT>
  title: string
}

export type TodoListItemT = {
  completed: boolean
  id: string
  summary: string
}
