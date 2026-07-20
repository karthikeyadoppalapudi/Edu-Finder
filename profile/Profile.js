import React from "react";
import "./Profile.css";

const Profile = () => {
  const subjects = [
    { name: "Biology", score: 0 },
    { name: "Mathematics", score: 18 },
    { name: "Physics", score: 0 },
  ];

  return (
    <div className="profile-page">
      {/* LEFT COLUMN */}
      <div className="profile-left">
        {/* USER CARD */}
        <div className="profile-user-card">
          <div className="avatar">K</div>
          <div>
            <h3>Karthikeya</h3>
            <p>karthikeyadoppalapudi2006@gmail.com</p>
          </div>
        </div>

        {/* PERFORMANCE AT A GLANCE */}
        <div className="profile-card">
          <h4>🏅 Performance at a Glance</h4>

          <div className="stat-row">
            <span>Tests Taken</span>
            <strong>8</strong>
          </div>

          <div className="stat-row">
            <span>Average Score</span>
            <strong className="green">7.8%</strong>
          </div>

          <div className="stat-row">
            <span>Strongest Subject</span>
            <span className="pill">Mathematics</span>
          </div>
        </div>

        {/* FUTURE GOALS */}
        <div className="profile-card">
          <h4>📈 My Future Goals</h4>
          <p className="muted">No goals set yet. Add one in your notes!</p>
          <button className="outline-btn">View or Add Goals</button>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="profile-right">
        {/* PERFORMANCE BY SUBJECT */}
        <div className="profile-card wide">
          <h4>Performance by Subject</h4>
          <p className="muted">Your average score in each subject.</p>

          {subjects.map((sub, index) => (
            <div key={index} className="progress-row">
              <span>{sub.name}</span>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${sub.score}%` }}
                ></div>
              </div>

              <span className="percent">{sub.score}%</span>
            </div>
          ))}
        </div>

        {/* RECENT TEST HISTORY */}
        <div className="profile-card wide">
          <h4>Recent Test History</h4>

          <div className="test-row">
            <div>
              <strong>Biology - Cell Biology</strong>
              <p>Sep 25, 2025 · easy Level</p>
            </div>
            <span className="red">0.0%</span>
          </div>

          <div className="test-row">
            <div>
              <strong>Mathematics - Calculus</strong>
              <p>Sep 25, 2025 · easy Level</p>
            </div>
            <span className="red">4.0%</span>
          </div>

          <div className="test-row">
            <div>
              <strong>Physics - Optics</strong>
              <p>Sep 25, 2025 · easy Level</p>
            </div>
            <span className="red">0.0%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
