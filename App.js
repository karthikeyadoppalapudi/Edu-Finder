import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./web/header/Header";
import Sidebar from "./web/sidebar/Sidebar";
import SidebarToggle from "./web/sidebar/SidebarToggle";

import MainPage from "./web/mainpage/MainPage";
import ScorePage from "./web/score/ScorePage";
import Colleges from "./web/colleges/Colleges";
import ContactInfo from "./web/pages/ContactInfo";
import Guidance from "./web/guidance/Guidance";
import SeniorInsights from "./web/seniorInsights/SeniorInsights";

import SmartLearn from "./web/smartLearn/SmartLearn";
import SmartLearnSubject from "./web/smartLearn/subject/SmartLearnSubject";

import MainSubjects from "./web/testPractice/MainSubjects";
import SubjectTopics from "./web/testPractice/SubjectTopics";
import TopicDifficulties from "./web/testPractice/TopicDifficulties";
import DifficultyTests from "./web/testPractice/DifficultyTests";

import CommentsReports from "./web/comments/CommentsReports";
import HowItWorks from "./web/pages/howItWorks/HowItWorks";
import Benefits from "./web/pages/benefits/Benefits";

import AdminDashboard from "./web/adminDashboard/AdminDashboard";
import PersonalLearningNotes from "./web/personalNotes/PersonalLearningNotes";
import LearningCalendar from "./web/pages/learningCalendar/LearningCalendar";
import Profile from "./web/profile/ProfilePage";
import Community from "./web/community/Community";

// ✅ CHAT FIXED IMPORT
import ChatAssistant from "./web/chatAssistant/ChatAssistant";

import LoginPage from "./web/authentication/LoginPage";
import SignupPage from "./web/authentication/SignupPage";
import ForgotPassword from "./web/authentication/ForgotPassword";

// ✅ STUDENTS PAGE
import StudentsPage from "./web/students/StudentsPage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="appRoot">
      <Header />
      <SidebarToggle onClick={() => setSidebarOpen(!sidebarOpen)} />

      <div style={{ display: "flex" }}>
        <Sidebar open={sidebarOpen} />

        <main
          style={{
            marginLeft: sidebarOpen ? "260px" : "0",
            transition: "margin-left 0.3s ease",
            width: "100%",
            padding: "24px",
            paddingTop: "92px",
            boxSizing: "border-box",
          }}
        >
          <Routes>
            {/* MAIN */}
            <Route path="/" element={<MainPage />} />

            {/* STUDENTS */}
            <Route path="/students" element={<StudentsPage />} />

            {/* AUTH */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* CORE FEATURES */}
            <Route path="/score" element={<ScorePage />} />
            <Route path="/colleges" element={<Colleges />} />
            <Route path="/contact" element={<ContactInfo />} />
            <Route path="/guidance" element={<Guidance />} />
            <Route path="/insights" element={<SeniorInsights />} />

            {/* SMART LEARN */}
            <Route path="/smartlearn" element={<SmartLearn />} />
            <Route
              path="/smartlearn/:subject"
              element={<SmartLearnSubject />}
            />

            {/* TEST PRACTICE */}
            <Route path="/test-practice" element={<MainSubjects />} />
            <Route path="/test-practice/:subject" element={<SubjectTopics />} />
            <Route
              path="/test-practice/:subject/:topic"
              element={<TopicDifficulties />}
            />
            <Route
              path="/test-practice/:subject/:topic/:level"
              element={<DifficultyTests />}
            />

            {/* OTHER */}
            <Route path="/reports" element={<CommentsReports />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/benefits" element={<Benefits />} />

            <Route path="/admin" element={<AdminDashboard />} />
            <Route
              path="/PersonalLearningNotes"
              element={<PersonalLearningNotes />}
            />
            <Route path="/calendar" element={<LearningCalendar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/community" element={<Community />} />

            {/* ✅ FINAL FIX — CHAT ROUTE */}
            <Route path="/assistant" element={<ChatAssistant />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
