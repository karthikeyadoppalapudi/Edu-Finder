import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
          <button className="notifBtn" aria-label="notifications"></button>

          {/* Avatar + Menu */}
          <div
            className="avatarWrap"
            ref={menuRef}
            onClick={() => setOpenMenu(!openMenu)}
            style={{ cursor: "pointer" }}
          >
            <div className="avatar">K</div>

            {openMenu && (
              <div className="profileMenu">
                <div className="profileTop">
                  <div className="profileName">Karthikeya</div>
                  <div className="profileEmail">
                    karthikeyadoppalapudi2006@gmail.com
                  </div>
                  <span className="adminBadge">admin</span>
                </div>

                <div
                  className="menuItem"
                  onClick={() => {
                    navigate("/profile");
                    setOpenMenu(false);
                  }}
                >
                  👤 Profile
                </div>

                <div
                  className="menuItem logout"
                  onClick={() => alert("Logout logic here")}
                >
                  🚪 Log out
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
