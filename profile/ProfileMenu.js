import React from "react";
import "./ProfileMenu.css";

const ProfileMenu = () => {
  return (
    <div className="profileMenuContainer">
      <div className="profileCard">
        {/* User Info */}
        <div className="userInfo">
          <div className="userName">Karthikeya</div>
          <div className="userEmail">karthikeyadoppalapudi2006@gmail.com</div>
          <div className="roleBadge">admin</div>
        </div>

        <div className="divider"></div>

        {/* Profile Button */}
        <div className="menuItem">
          <span className="menuIcon">👤</span>
          <span>Profile</span>
        </div>

        {/* Logout */}
        <div className="menuItem logout">
          <span className="menuIcon">🚪</span>
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
