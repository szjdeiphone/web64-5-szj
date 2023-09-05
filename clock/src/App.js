import './App.css';
import { useState, useEffect } from 'react'

function App() {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
      const interval = setInterval(() => {
        setDate(new Date());
      }, 1000);

      return () => {
        clearInterval(interval);
      }
    })
    const formatTime = n => n < 10 ? '0' + n : n;
    const hours = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
  return (
    <div>
      {`${hours}:${minutes}:${seconds}`}
    </div>
  )
}

export default App;
