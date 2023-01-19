import * as React from 'react'
import * as Icon from '@heroicons/react/outline'
import type { TodoListItemT, TodoListT } from '../index'
import TodoListItem from './TodoListItem'

const iconList = Object.keys(Icon)

const ICON_DISPLAY_LIMIT = 16
const initialIcons = iconList.slice(0, ICON_DISPLAY_LIMIT)

const TodoList = ({
  list,
  onUpdateList,
  onRemoveList,
  onAddItem,
  onRemoveItem,
  onUpdateItem,
}: {
  list: TodoListT
  onUpdateList: (list: any) => void
  onRemoveList: () => void
  onAddItem: (summary: string) => void
  onRemoveItem: (id: string) => void
  onUpdateItem: (item: TodoListItemT) => void
}) => {
  const [filteredIcons, setFilteredIcons] = React.useState(initialIcons)
  const [displayChangeIcon, setDisplayChangeIcon] = React.useState(false)
  const [displayAddItem, setDisplayAddItem] = React.useState(false)

  // @ts-ignore
  const ListIcon = Icon[list.icon] || Icon.CollectionIcon

  return (
    <>
      <h1 className="relative flex items-center my-3 text-2xl font-semibold">
        <button
          type="button"
          // onClick={() => onUpdateList({ icon: 'CollectionIcon' })}
          onClick={() => setDisplayChangeIcon(!displayChangeIcon)}
        >
          <ListIcon
            className="mr-3 inline align-text-bottom"
            color={list.color || 'text-white'}
            height={24}
          />
        </button>

        <div
          className={`absolute top-full space-y-3 rounded dark:bg-gray-800 w-56 p-3 ${
            !displayChangeIcon ? 'hidden' : ''
          }`}
        >
          <input
            className="block border border-gray-900 w-full px-2 py-1 text-base dark:text-gray-900"
            type="text"
            onChange={(event) => {
              const query = event.target.value
              if (!query) setFilteredIcons(initialIcons)

              const matchingIcons = iconList.filter((icon) =>
                icon.toLowerCase().includes(query.toLowerCase())
              )

              setFilteredIcons(matchingIcons.slice(0, ICON_DISPLAY_LIMIT))
            }}
          />
          {filteredIcons.map((IconName: string) => {
            // @ts-ignore
            const IconEl = Icon[IconName]
            return <IconEl className="inline mx-3" height={24} />
          })}
          <button className="text-base" type="reset">
            Cancel
          </button>
          <button className="text-base" type="submit">
            Save
          </button>
        </div>

        <span className="flex-1">{list.title}</span>

        <button className="text-base" type="button" onClick={onRemoveList}>
          Remove
        </button>
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
            className="border border-gray-900 px-2 py-1 dark:text-gray-900"
            type="text"
            name="summary"
            autoFocus
            required
          />
          <button
            className="rounded bg-secondary hover:bg-secondary-dark focus:bg-secondary-dark px-2 py-1 text-white"
            type="submit"
            title="Add Task"
          >
            <Icon.PlusIcon height={20} className="inline align-text-bottom" />
          </button>
        </form>
      )}
    </>
  )
}

export default TodoList
