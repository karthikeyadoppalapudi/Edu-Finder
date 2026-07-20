import React from "react";

const StatsCards = () => {
  return (
    <div className="stats-wrapper">
      <div className="stat-card streak">
        <p>Current Streak</p>
        <h2>0 days</h2>
      </div>

      <div className="stat-card active">
        <p>Active Days</p>
        <h2>4</h2>
      </div>

      <div className="stat-card notes">
        <p>Total Notes</p>
        <h2>0</h2>
      </div>
    </div>
  );
};

export default StatsCards;
