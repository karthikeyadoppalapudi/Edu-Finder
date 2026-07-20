import React from "react";

const DateDetails = ({ selectedDate }) => {
  return (
    <div className="details-box">
      <h3>Select a Date</h3>

      {!selectedDate && (
        <div className="empty-details">
          <p>Click on a date to view your activities</p>
        </div>
      )}

      {selectedDate && <p>You selected: {selectedDate}</p>}
    </div>
  );
};

export default DateDetails;
