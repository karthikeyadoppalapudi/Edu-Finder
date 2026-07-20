import { Menu } from "lucide-react";
import "./SidebarToggle.css";

function SidebarToggle({ onClick }) {
  return (
    <button className="sidebar-toggle" onClick={onClick}>
      <Menu />
    </button>
  );
}

export default SidebarToggle;
