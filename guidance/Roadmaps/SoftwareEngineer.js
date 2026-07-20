// src/web/guidance/Roadmaps/SoftwareEngineer.js

import React from "react";

const SoftwareEngineer = () => {
  return (
    <div className="roadmap-container">
      <h2 className="roadmap-title">Software Engineer Roadmap</h2>

      {/* SECTION 1 - SCHOOL (6th–10th) */}
      <div className="roadmap-section">
        <h3>1. Foundation Stage (6th – 10th Standard)</h3>
        <ul>
          <li>Focus on Mathematics – algebra, geometry, and basic logic.</li>
          <li>
            Start exploring computers: basic programming with Scratch or Python.
          </li>
          <li>Improve English communication and writing skills.</li>
          <li>
            Participate in school competitions like coding, quizzes, robotics
            etc.
          </li>
        </ul>
      </div>

      {/* SECTION 2 - INTERMEDIATE (11th–12th) */}
      <div className="roadmap-section">
        <h3>2. Intermediate / Higher Secondary (11th – 12th)</h3>
        <ul>
          <li>Select MPC/Science stream (Maths + Physics + Chemistry).</li>
          <li>Learn basic programming (Python / C / Java).</li>
          <li>
            Build logical reasoning: puzzles, Olympiads, aptitude practice.
          </li>
          <li>
            Start preparing for entrance exams (JEE, EAMCET, BITSAT etc.).
          </li>
        </ul>
      </div>

      {/* SECTION 3 - ENTRANCE EXAMS */}
      <div className="roadmap-section">
        <h3>3. Entrance Exams for Engineering</h3>
        <ul>
          <li>JEE Main / JEE Advanced</li>
          <li>EAMCET / KCET / MHT-CET (State-level)</li>
          <li>BITSAT (Birla Institute of Technology)</li>
          <li>VITEEE, SRMJEE, KIITEE</li>
        </ul>
      </div>

      {/* SECTION 4 - ENGINEERING DEGREE */}
      <div className="roadmap-section">
        <h3>4. Bachelor’s Degree (B.Tech / B.E in CSE, IT, ECE)</h3>
        <ul>
          <li>
            Learn core subjects:
            <ul>
              <li>Data Structures & Algorithms</li>
              <li>Operating Systems</li>
              <li>DBMS</li>
              <li>Computer Networks</li>
              <li>OOP (Java / C++)</li>
            </ul>
          </li>
          <li>
            Learn development skills:
            <ul>
              <li>Web Development (HTML, CSS, JS, React)</li>
              <li>Backend (Node.js, Java Spring, Python Django)</li>
              <li>Mobile Apps (Flutter, React Native)</li>
            </ul>
          </li>
          <li>Do 2–3 internships during 2nd/3rd year.</li>
          <li>Work on real-world projects and publish on GitHub.</li>
          <li>Participate in hackathons and coding contests.</li>
        </ul>
      </div>

      {/* SECTION 5 - SKILLS TO MASTER */}
      <div className="roadmap-section">
        <h3>5. Skills Required to Become a Software Engineer</h3>
        <ul>
          <li>Strong problem-solving & logical thinking.</li>
          <li>Coding languages: C++, Java, Python or JavaScript.</li>
          <li>Data Structures & Algorithms (VERY IMPORTANT).</li>
          <li>Version control (Git & GitHub).</li>
          <li>Databases (MySQL / MongoDB).</li>
          <li>Cloud basics (AWS / Azure / GCP).</li>
        </ul>
      </div>

      {/* SECTION 6 - PROJECT IDEAS */}
      <div className="roadmap-section">
        <h3>6. Project Ideas to Build Your Portfolio</h3>
        <ul>
          <li>Personal Portfolio Website</li>
          <li>Weather App using APIs</li>
          <li>Chat Application</li>
          <li>College Management System</li>
          <li>E-commerce Website</li>
          <li>AI/ML Projects (Image Classification, Chatbot, etc.)</li>
        </ul>
      </div>

      {/* SECTION 7 - JOB ROLES */}
      <div className="roadmap-section">
        <h3>7. Job Roles in Software Engineering</h3>
        <ul>
          <li>Software Developer / Engineer</li>
          <li>Frontend Developer</li>
          <li>Backend Developer</li>
          <li>Full Stack Developer</li>
          <li>Mobile App Developer</li>
          <li>DevOps Engineer</li>
          <li>Machine Learning Engineer</li>
          <li>Cloud Engineer</li>
        </ul>
      </div>

      {/* SECTION 8 - ADDITIONAL TIPS */}
      <div className="roadmap-section">
        <h3>8. Additional Tips for Success</h3>
        <ul>
          <li>
            Practice coding daily on platforms like LeetCode, CodeChef,
            HackerRank.
          </li>
          <li>Build a strong resume and LinkedIn profile.</li>
          <li>Create a GitHub portfolio of projects.</li>
          <li>Read tech blogs and follow industry trends.</li>
          <li>Stay consistent and keep learning new technologies.</li>
        </ul>
      </div>
    </div>
  );
};

export default SoftwareEngineer;
