import TodoClock from '../todoCLock/TodoClock';
import './header.css';

const Header = ({getDate}) => {
   return (
      <div className='header'>
         <div className="container">
            <TodoClock getDate={getDate} />
         </div>
      </div>
   );
};

export default Header;