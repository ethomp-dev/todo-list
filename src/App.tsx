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

  const handleAddList = (title: string) => {
    dispatchTodoCollection({
      type: 'ADD_TODO_LIST',
      payload: {
        list: {
          title,
        },
      },
    })
  }

  const handleRemoveList = () => {
    dispatchTodoCollection({
      type: 'REMOVE_TODO_LIST',
      payload: {
        listIndex,
      },
    })
    setListIndex(0)
  }

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
    dispatchTodoCollection({
      type: 'UPDATE_TODO_ITEM',
      payload: {
        listIndex,
        item,
      },
    })
  }

  return (
    <div className="min-h-screen text-gray-900 dark:bg-gray-900 dark:text-white p-6">
      <div className="container grid grid-cols-6 gap-12 mx-auto">
        <header className="col-span-full lg:col-span-2">
          <div className="grid grid-flow-row gap-12">
            <div className="col-span-full flex justify-between items-center">
              <DateHeading />
            </div>

            {!todoCollection.isLoading ? (
              <TodoListNav
                collection={todoCollection.data}
                onListChange={setListIndex}
                onAddList={handleAddList}
              />
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </header>

        <main className="col-span-full lg:col-span-4">
          <div className="grid grid-flow-row gap-12">
            {!todoCollection.isLoading && todoCollection.data.length > 0 ? (
              <TodoList
                list={todoCollection.data[listIndex]}
                onRemoveList={handleRemoveList}
                onAddItem={handleAddItem}
                onRemoveItem={handleRemoveItem}
                onUpdateItem={handleUpdateItem}
              />
            ) : null}
          </div>
        </main>

        <footer className="col-span-full">
          <ThemeSwitcher />
        </footer>
      </div>
    </div>
  )
}

export default App
