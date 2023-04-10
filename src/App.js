import { useEffect, useState } from 'react';

import Header from "./components/header/Header";
import TodoForm from "./components/todoForm/TodoForm";
import TodoSearch from './components/todoSearch/TodoSearch';
import TodoList from './components/todoList/TodoList';

function App() {
   const [todos, setTodos] = useState(() => {
      const data = localStorage.getItem('todos');
      if (data) {
         return JSON.parse(data);
      } else return []
   });
   const [query, setQuery] = useState('');
   
   let date = {};

   const getDate = (d) => {
      date = d;
      if ((date.hours > 7 && date.hours !== 12 && date.period === 'PM') || (date.hours < 5 && date.period === 'AM')) {
         document.body.classList.add('dark');
      } else {
         document.body.classList.remove('dark');
      }
   }

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);

   const addItem = (text) => {
      setTodos([
         ...todos,
         {
            text,
            date: `${date.hours}:${date.minutes} ${date.period}`,
            isCompleted: false,
            id: new Date().getMilliseconds()
         }
      ]);
   }

   const removeItem = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
   }

   const changeTodo = (id) => {
      const copy = [...todos];
      const current = copy.find(todo => todo.id === id);
      current.isCompleted = !current.isCompleted;
      setTodos(copy);
   }

   const changeSearch = (query) => {
      setQuery(query);
   }

   const filteredTodos = todos.filter(todo => {
      return todo.text.toLowerCase().includes(query.toLowerCase());
   }) 

   return (
      <div className='App'>
         <Header getDate={getDate} />
         <div className="todo">
            <div className="container">
               <div className="todo__top">
                  <TodoSearch changeSearch={changeSearch} />
                  <TodoForm addItem={addItem} />
               </div>
               <div className="todo__bottom">
                  {filteredTodos.length > 0
                     ?
                     <TodoList
                        todos={filteredTodos}
                        removeItem={removeItem}
                        changeTodo={changeTodo}
                     />
                     :
                     <span>No tasks...</span>
                  }
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;