import React from "react";

const ActivityLegend = () => {
  return (
    <div className="legend">
      <span className="legend green">High (5+ activities)</span>
      <span className="legend blue">Medium (3–4 activities)</span>
      <span className="legend pink">Low (1–2 activities)</span>
      <span className="legend gray">No activity</span>
    </div>
  );
};

export default ActivityLegend;
