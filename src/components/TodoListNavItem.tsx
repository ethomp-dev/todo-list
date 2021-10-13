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
    <li className="text-left font-semibold">
      <button
        className="transition-colors flex flex-col rounded bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-850 focus:bg-gray-100 dark:focus:bg-gray-850 w-full h-full p-6"
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
