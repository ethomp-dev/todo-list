import * as React from 'react'
import { PlusIcon } from '@heroicons/react/outline'
import type { TodoCollectionT } from '../index'
import TodoListNavItem from './TodoListNavItem'

const TodoListNav = ({
  collection,
  onListChange,
  onAddList,
}: {
  collection: TodoCollectionT
  onListChange: (index: number) => void
  onAddList: (title: string) => void
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

        <li className="font-semibold">
          <button
            className="transition-colors rounded bg-secondary hover:bg-secondary-dark focus:bg-secondary-dark w-full h-full p-6 text-left text-white"
            onClick={() => {
              const newTitle = prompt('List Title')
              if (newTitle) {
                onAddList(newTitle)
              }
            }}
          >
            <PlusIcon className="mb-3" height={24} />
            New List
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default TodoListNav
