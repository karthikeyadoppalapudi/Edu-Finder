import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const performanceData = [
    { subject: "Biology", value: 0 },
    { subject: "Mathematics", value: 18 },
    { subject: "Physics", value: 0 },
  ];

  const recentTests = [
    {
      title: "Biology - Cell Biology",
      date: "Sep 25, 2025 - easy Level",
      score: "0.0%",
      correct: "0/1 correct",
    },
    {
      title: "Mathematics - Calculus",
      date: "Sep 25, 2025 - easy Level",
      score: "4.0%",
      correct: "1/25 correct",
    },
    {
      title: "Physics - Optics",
      date: "Sep 25, 2025 - easy Level",
      score: "0.0%",
      correct: "0/1 correct",
    },
  ];

  return (
    <div className="profile-page">
      <h1 className="page-title">My Dashboard</h1>
      <p className="page-subtitle">
        Welcome back, Karthikeya! Here's your progress overview.
      </p>

      <div className="profile-layout">
        {/* LEFT COLUMN */}
        <div className="left-section">
          <div className="card user-card">
            <div className="avatar">K</div>
            <div className="user-info">
              <h3 className="user-name">Karthikeya</h3>
              <p className="user-email">Karthikeyadoppalapudi2006@gmail.com</p>
            </div>
          </div>

          <div className="card glance-card">
            <h3 className="card-title">Performance at a Glance</h3>

            <div className="glance-row">
              <span>Tests Taken</span>
              <b>8</b>
            </div>

            <div className="glance-row">
              <span>Average Score</span>
              <b className="green">7.8%</b>
            </div>

            <div className="glance-row">
              <span>Strongest Subject</span>
              <b className="pill purple">Mathematics</b>
            </div>
          </div>

          <div className="card goals-card">
            <h3 className="card-title">My Future Goals</h3>
            <p className="muted">No goals set yet. Add one in your notes!</p>
            <button className="goals-btn">View or Add Goals</button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-section">
          <div className="card chart-card">
            <h3 className="card-title">Performance by Subject</h3>
            <p className="chart-subtext">Your average score in each subject.</p>

            {performanceData.map((item, idx) => (
              <div className="chart-bar-row" key={idx}>
                <span className="chart-label">{item.subject}</span>
                <div className="chart-bar">
                  <div
                    className="chart-fill"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
                <span className="chart-value">{item.value}%</span>
              </div>
            ))}
          </div>

          <div className="card history-card">
            <h3 className="card-title">Recent Test History</h3>

            {recentTests.map((test, idx) => (
              <div className="history-item" key={idx}>
                <div>
                  <p className="history-title">{test.title}</p>
                  <p className="history-date">{test.date}</p>
                </div>
                <div className="history-score">
                  <b>{test.score}</b>
                  <p className="history-correct">{test.correct}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
