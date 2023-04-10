import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import './todoForm.css';

const TodoForm = ({ addItem }) => {
   const [value, setValue] = useState('');

   const createItem = (e) => {
      e.preventDefault();
      if (value.length > 0) {
         addItem(value);
      }
      setValue('');
   }

   return (
      <form onSubmit={(e) => createItem(e)} className="todo__form">
         <input
            className="todo__form-input"
            type="text"
            placeholder='Note'
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
         />
         <button  className="todo__form-btn" type="submit">
            <AiOutlinePlus size={23} color={'white'} />
         </button>
      </form>
   );
};

export default TodoForm;