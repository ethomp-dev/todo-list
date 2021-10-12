import * as React from 'react'
import { PlusIcon } from '@heroicons/react/outline'
import type { TodoCollectionT } from '../index'
import TodoListNavItem from './TodoListNavItem'

const TodoListNav = ({
  collection,
  onListChange,
}: {
  collection: TodoCollectionT
  onListChange: (index: number) => void
}) => {
  return (
    <nav className="col-span-full">
      <ul className="grid grid-cols-2 gap-6">
        {collection.map((list, index) => (
          <TodoListNavItem
            key={index}
            index={index}
            list={list}
            onListChange={onListChange}
          />
        ))}

        <li className="rounded bg-secondary text-white">
          <button className="w-full h-full p-6 text-left font-semibold">
            <PlusIcon className="mb-3" height={24} />
            New List
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default TodoListNav
