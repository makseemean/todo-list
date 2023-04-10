import TodoItem from "../todoItem/TodoItem";

const TodoList = ({ todos, removeItem, changeTodo }) => {
   return (
      <ul className="todo__list">
         {todos.map(item => (
            <TodoItem
               {...item}
               key={item.id}
               changeTodo={changeTodo}
               removeItem={removeItem}
            />
         ))}
      </ul>
   );
};

export default TodoList;