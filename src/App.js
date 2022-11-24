import './App.css';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import CreateTodoButton from './components/CreateTodoButton';
import Title from './components/Title';
import useLocalStorage from './components/UseLocalStorage'
import LinearProgress from '@mui/material/LinearProgress';
import Modal from './components/Modal';
import './styles.css'
import { useState } from 'react';


// const defaultTodos = [
//   { text: 'Slice grandma', completed: true },
//   { text: 'Eat bear with bare hands', completed: false },
//   { text: 'enjoy cheeseburger while watching twho girls one cup', completed: true }
// ];




function App() {

  const { todos, saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
  const [search, setSearch] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  let searchedTodos = [];

  if (!search.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = search.toLowerCase()
      return todoText.includes(searchText);
    })
  }

  const doneTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text,
    })
    saveTodos(newTodos)
  }

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <>
      <div className='wrapper'>
      <div className='container'>
        <Title />
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />
        <TodoSearch
          search={search}
          setSearch={setSearch}
        />
        <TodoList>
          {loading && <LinearProgress color="secondary" />}
          {error && <p>Error... Desespera</p>}
          {(!loading && !searchedTodos.length)}


          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => doneTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)} />


          ))}
        </TodoList>

        {openModal && (
          <Modal
            setOpenModal={setOpenModal}
            openModal={openModal}
            addTodo={addTodo}>
          </Modal>
        )}
        <CreateTodoButton
          setOpenModal={setOpenModal}
          openModal={openModal} />
          
      </div>
      </div>
    </>
  );
}

export default App;
