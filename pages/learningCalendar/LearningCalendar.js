import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import StatsCards from "./StatsCards";
import MonthlyCalendar from "./MonthlyCalendar";
import DateDetails from "./DateDetails";
import ActivityLegend from "./ActivityLegend";
import "./calendar.css";

const LearningCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="calendar-page">
      <CalendarHeader />

      <StatsCards />

      <div className="calendar-main">
        <MonthlyCalendar onSelectDate={setSelectedDate} />
        <DateDetails selectedDate={selectedDate} />
      </div>

      <ActivityLegend />
    </div>
  );
};

export default LearningCalendar;
