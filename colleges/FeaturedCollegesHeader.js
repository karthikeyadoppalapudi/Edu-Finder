import React from "react";
import "./FeaturedCollegesHeader.css";

const FeaturedCollegesHeader = () => {
  return (
    <div className="featured-header-wrapper">
      <div className="featured-inner">
        <button className="featured-tag">
          🎓 Premium Educational Institutions
        </button>

        <h1 className="featured-title">Featured Colleges</h1>

        <p className="featured-subtitle">
          Explore premier educational institutions offering diverse courses
          tailored to your academic achievements
        </p>
      </div>
    </div>
  );
};

export default FeaturedCollegesHeader;
