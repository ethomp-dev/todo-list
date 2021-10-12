import * as React from 'react'
import * as Icon from '@heroicons/react/outline'
import type { TodoListItemT, TodoListT } from '../index'
import TodoListItem from './TodoListItem'

const TodoList = ({
  list,
  onAddItem,
  onRemoveItem,
  onUpdateItem,
}: {
  list: TodoListT
  onAddItem: (summary: string) => void
  onRemoveItem: (id: string) => void
  onUpdateItem: (item: TodoListItemT) => void
}) => {
  const [displayAddItem, setDisplayAddItem] = React.useState(false)

  // @ts-ignore
  const ListIcon = Icon[list.icon] || Icon.CollectionIcon

  return (
    <>
      <h1 className="my-3 text-2xl font-semibold">
        <ListIcon
          className="mr-3 inline align-text-bottom"
          color={list.color || 'text-white'}
          height={24}
        />
        {list.title}
      </h1>

      <ul className="space-y-6 dark:text-gray-200">
        {list.items.length > 0 ? (
          list.items.map((item) => (
            <TodoListItem
              key={item.id}
              item={item}
              onRemoveItem={onRemoveItem}
              onUpdateItem={onUpdateItem}
            />
          ))
        ) : (
          <p>Empty</p>
        )}
      </ul>

      <hr className="border-gray-200 dark:border-gray-600" />

      {!displayAddItem ? (
        <button
          className="text-left dark:text-gray-200"
          type="button"
          accessKey="n"
          onClick={() => setDisplayAddItem(true)}
        >
          <Icon.PlusCircleIcon
            height={20}
            className="mr-2 inline align-text-bottom"
          />
          New Task
        </button>
      ) : (
        <form
          onKeyDown={(event) => {
            event.key === 'Escape' && setDisplayAddItem(false)
          }}
          onSubmit={(event: any) => {
            event.preventDefault()
            onAddItem(event.target.summary?.value)
            setDisplayAddItem(false)
          }}
          className="space-x-3"
        >
          <input
            className="border border-gray-900 dark:text-gray-900 px-2 py-1"
            type="text"
            name="summary"
            autoFocus
            required
          />
          <button
            className="rounded bg-secondary px-2 py-1 text-white"
            type="submit"
          >
            <Icon.PlusIcon height={20} className="inline align-text-bottom" />
          </button>
        </form>
      )}
    </>
  )
}

export default TodoList
