import './todoSearch.css';

const TodoSearch = ({changeSearch}) => {

   return (
      <input
         className='todo__search'
         type="text"
         placeholder='Search'
         onChange={e => changeSearch(e.target.value)}
      />
   );
};

export default TodoSearch;