import * as React from 'react'
import type { TodoListItemT } from '../index'

const TodoListItem = ({
  item,
  onRemoveItem,
}: {
  item: TodoListItemT
  onRemoveItem: (id: string) => void
}) => {
  return (
    <li>
      <label
        className={`flex items-center justify-between${
          item.completed ? ' line-through' : ''
        }`}
      >
        <input
          className="mr-3"
          type="checkbox"
          defaultChecked={item.completed}
        />
        <span className="flex-1">{item.summary}</span>
        <button
          className="ml-6"
          type="button"
          onClick={() => onRemoveItem(item.id)}
        >
          Remove
        </button>
      </label>
    </li>
  )
}

export default TodoListItem
