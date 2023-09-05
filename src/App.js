import './App.css';
import { useState } from "react";

const getDayAndMonthFromDayOfYear = (dayOfYear) => {
  const year = new Date().getFullYear();
  const date = new Date(year, 0, dayOfYear);
  return `${date.getMonth() + 1}/${date.getDate()}`;
};

function App() {
  const [activeDays, setActiveDays] = useState({});

  const totalWeeks = 52;
  const daysInWeek = 7;
  let dayOfYear = 1;

  const toggleDayActive = (day) => {
    setActiveDays(prevState => ({
      ...prevState,
      [day]: !prevState[day]
    }));
  };

  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <div className="grid">
        {Array.from({ length: totalWeeks }, (_, weekIndex) => (
          <div key={weekIndex} className="week">
            {Array.from({ length: daysInWeek }, (_, dayIndex) => {
              if (dayOfYear > 364) {
                return null;
              }
              
              const day = dayOfYear;
              const isActive = activeDays[day];
              dayOfYear++;

              return (
                <div
                  key={dayIndex}
                  className={`day ${isActive ? 'active' : ''}`}
                  title={`Day: ${day} - Date: ${getDayAndMonthFromDayOfYear(day)}`}
                  onClick={() => toggleDayActive(day)}
                >
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
