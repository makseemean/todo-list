import { useState, useEffect } from "react";

const TodoClock = ({ getDate }) => {
   const [date, setDate] = useState(getTime());

   useEffect(() => {
      setInterval(() => {
         setDate(getTime());
      }, 1000);
   }, [])

   function getTime() {
      let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

      let date = new Date();
      let hours = date.getHours() - (date.getHours() > 12 ? 12 : 0);
      let minutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
      let period = date.getHours() >= 12 ? 'PM' : 'AM';
      let dayName = days[date.getDay()];
      let dayNum = date.getDate();
      return { hours, minutes, period, dayName, dayNum }
   }

   getDate(date);

   return (
      <div className="header__data">
         <p className='header__data-day'>{date.dayName} {date.dayNum}</p>
         <p className="header__data-time">{date.hours}:{date.minutes} {date.period}</p>
      </div>
   );
};

export default TodoClock;