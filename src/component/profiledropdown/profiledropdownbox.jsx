import React from "react";
import "./profiledropdownbox.css"
const profiledropdownbox = () => {
  return (
    <>
      <div className="profile-dropdown-container">
        <div className="profile-dropdown-content">
          <ul>
            <li>
              <Link to="#">
                <img src="" alt="" />
                <span>Edit Profile</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src="" alt="" />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link to="/signin">
                <img src="" alt="" />
                <span>Logout</span>
              </Link>
            </li>
            <li>
              <Link to="review">
                <img src="" alt="" />
                <span>Dark Mode</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default profiledropdownbox;
