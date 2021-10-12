import * as React from 'react'
import type { TodoListItemT } from './index'
import useTodoCollection from './lib/useTodoCollection'
import DateHeading from './components/DateHeading'
import TodoListNav from './components/TodoListNav'
import TodoList from './components/TodoList'
import ThemeSwitcher from './components/ThemeSwitcher'

const App = () => {
  const [todoCollection, dispatchTodoCollection] = useTodoCollection()
  const [listIndex, setListIndex] = React.useState(0)

  const handleAddItem = (summary: string) => {
    dispatchTodoCollection({
      type: 'ADD_TODO_ITEM',
      payload: {
        listIndex,
        itemSummary: summary,
      },
    })
  }

  const handleRemoveItem = (id: string) => {
    dispatchTodoCollection({
      type: 'REMOVE_TODO_ITEM',
      payload: {
        listIndex,
        itemId: id,
      },
    })
  }

  const handleUpdateItem = (item: TodoListItemT) => {
    console.log(item)
    dispatchTodoCollection({
      type: 'UPDATE_TODO_ITEM',
      payload: {
        listIndex,
        item,
      },
    })
  }

  return (
    <div className="grid auto-rows-min grid-cols-6 gap-12 min-h-screen text-gray-900 dark:bg-gray-900 dark:text-white p-6">
      <header className="col-span-2">
        <div className="grid grid-flow-row gap-12">
          <div className="col-span-full flex justify-between">
            <DateHeading />
            <ThemeSwitcher />
          </div>

          {!todoCollection.isLoading ? (
            <TodoListNav
              collection={todoCollection.data}
              onListChange={setListIndex}
            />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </header>

      <main className="col-span-4">
        <div className="grid grid-flow-row gap-12">
          {!todoCollection.isLoading && todoCollection.data.length > 0 ? (
            <TodoList
              list={todoCollection.data[listIndex]}
              onAddItem={handleAddItem}
              onRemoveItem={handleRemoveItem}
              onUpdateItem={handleUpdateItem}
            />
          ) : null}
        </div>
      </main>
    </div>
  )
}

export default App
