import * as React from 'react'
import type { TodoListItemT } from '../index'

const TodoListItem = ({ item }: { item: TodoListItemT }) => {
  return (
    <li>
      <label className={`${item.completed ? 'line-through' : ''}`}>
        <input
          className="mr-3"
          type="checkbox"
          defaultChecked={item.completed}
        />
        {item.summary}
      </label>
    </li>
  )
}

export default TodoListItem
