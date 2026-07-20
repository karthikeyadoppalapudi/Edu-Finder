import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import {
  Home,
  GraduationCap,
  Phone,
  User,
  Lightbulb,
  ClipboardList,
  Calendar,
  Users,
  MessageCircle,
  HelpCircle,
  Award,
  Shield,
} from "lucide-react";

const menuItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/score", icon: GraduationCap, label: "Your Score, Your College" },
  { to: "/colleges", icon: GraduationCap, label: "Colleges" },
  { to: "/students", icon: Users, label: "Students" },
  { to: "/contact", icon: Phone, label: "Contact Info" },
  { to: "/guidance", icon: User, label: "Guidance" },
  { to: "/insights", icon: Users, label: "Senior Insights" },
  { to: "/smartlearn", icon: Lightbulb, label: "SmartLearn" },
  { to: "/test-practice", icon: ClipboardList, label: "Test Practice" },
  {
    to: "/PersonalLearningNotes",
    icon: ClipboardList,
    label: "Personal Learning Notes",
  },
  { to: "/calendar", icon: Calendar, label: "Learning Calendar" },
  { to: "/community", icon: Users, label: "Community" },
  { to: "/assistant", icon: MessageCircle, label: "Chat Assistant" },
  { to: "/reports", icon: MessageCircle, label: "Comments & Reports" },
  { to: "/how-it-works", icon: HelpCircle, label: "How It Works" },
  { to: "/benefits", icon: Award, label: "Benefits" },
  { to: "/admin", icon: Shield, label: "Admin Dashboard" },
];

function Sidebar({ open }) {
  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
      <ul>
        {menuItems.map(({ to, icon: Icon, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Icon /> {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
