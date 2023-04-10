import { HiOutlineTrash } from 'react-icons/hi'

import './todoItem.css';

const TodoItem = ({ text, date, id, isCompleted, removeItem, changeTodo }) => {
   return (
      <li className={`todo__item ${isCompleted && 'todo__item_completed'}`}>
         <div className="todo__item-info">
            <h4 className="todo__item-text">{text}</h4>
            <p className="todo__item-data">Added at {date}</p>
         </div>
         <div className="todo__item-buttons">
            <button 
               className='todo__item-check'
               onClick={() => changeTodo(id)}
            ></button>
            <button
               className='todo__item-delete'
               onClick={() => removeItem(id)}
            >
               <HiOutlineTrash color='FF4545' size={25} />
            </button>
         </div>
      </li>
   );
};

export default TodoItem;