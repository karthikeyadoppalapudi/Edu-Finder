import React, { useState } from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const MonthlyCalendar = ({ onSelectDate }) => {
  const [activeDate, setActiveDate] = useState(15);

  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="calendar-box">
      <div className="calendar-title">
        <button>‹</button>
        <h3>December 2025</h3>
        <button>›</button>
      </div>

      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day} className="day-label">
            {day}
          </div>
        ))}

        {dates.map((date) => (
          <div
            key={date}
            className={`date-cell ${activeDate === date ? "active" : ""}`}
            onClick={() => {
              setActiveDate(date);
              onSelectDate(date);
            }}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyCalendar;
