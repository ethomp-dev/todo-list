import * as React from 'react'
import * as Icon from '@heroicons/react/outline'
import type { TodoListT } from '../index'
import { pluralize } from '../lib/utils'

const TodoListNavItem = ({
  index,
  list,
  onListChange,
}: {
  index: number
  list: TodoListT
  onListChange: (index: number) => void
}) => {
  // @ts-ignore
  const ListIcon = Icon[list.icon] || Icon.CollectionIcon

  return (
    <li className="rounded bg-gray-50 dark:bg-gray-800">
      <button
        className="flex flex-col w-full h-full p-6 text-left font-semibold"
        onClick={() => onListChange(index)}
      >
        <ListIcon
          className="mb-3"
          color={list.color || 'text-white'}
          height={24}
        />

        <p className="flex-1 mb-1">{list.title}</p>

        {list.items.length > 0 ? (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {pluralize(list.items.length, 'task')}
          </p>
        ) : null}
      </button>
    </li>
  )
}

export default TodoListNavItem
