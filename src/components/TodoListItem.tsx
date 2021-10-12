import * as React from 'react'
import type { TodoListItemT } from '../index'

const TodoListItem = ({
  item,
  onRemoveItem,
  onUpdateItem,
}: {
  item: TodoListItemT
  onRemoveItem: (id: string) => void
  onUpdateItem: (item: TodoListItemT) => void
}) => {
  return (
    <li>
      <label className="flex items-center justify-between">
        <input
          className="mr-3"
          type="checkbox"
          defaultChecked={item.completed}
          onChange={(event) => {
            onUpdateItem({ ...item, completed: event.target.checked })
          }}
        />
        <span className={`flex-1${item.completed ? ' line-through' : ''}`}>
          {item.summary}
        </span>
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
