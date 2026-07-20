import React, { useState } from "react";
import "./Header.css";
import ProfileMenu from "../profile/ProfileMenu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="topHeader">
      <div className="headerInner">
        <div className="brandLeft">
          <div className="logoBox">🎓</div>
          <div className="brandText">
            <div className="brandTitle">EduFinder</div>
            <div className="brandTag">Course Discovery Platform</div>
          </div>
        </div>

        <div className="headerRight">
          <button className="notifBtn"></button>

          <div className="avatarWrap" onClick={() => setOpen(!open)}>
            <div className="avatar">K</div>
          </div>

          {open && <ProfileMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
