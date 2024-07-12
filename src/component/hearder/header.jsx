import { FaRegBell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import ProfileImg from "../../assets/Profile image.png";
// import { useState } from "react";
const Header = () => {
  // const [sideBar, setSideBar] = useState(false);
  // const [searchInput, setSearchInput] = useState(false);
  // const [profileDropdown, setProfileDropdown] = useState(false);
  // const showSideBar = () => {
  //   setSideBar(!sideBar);
  // };
  // const showSearchInput = () => {
  //   setSearchInput(!searchInput);
  // };
  // const showProfileDropdown = () => {
  //   setProfileDropdown(!profileDropdown);
  // };
  return (
    <>
      <header className="header">
        <section className="header-content">
          <div className="search-input-menubar">
            <div className="menubar-icon-container">
            <IoMdMenu className="menubar-icon" />
            </div>
            <div className="mobile-searchicon-container">
            <CiSearch className="mobile-search-icon"/>
            </div>
            <div className="desktop-search-input">
              <CiSearch className="desktop-search-icon"/>
              <input
                type="search"
                placeholder="Search Property, Customer etc"
              />
            </div>
          </div>
          <div className="notification-profile-container">
            <div className="notification-icon-container">
              <FaRegBell className="notification-bell-icon"/>
              <div className="red-dot"></div>
            </div>
            <div className="profile-container">
              <div className="profile-avarter">
                <img src={ProfileImg} alt="profile avarter" />
              </div>
              <div className="name-role">
                <span className="name">Hawkins Maru</span>
                <span className="role">Company Manager</span>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
