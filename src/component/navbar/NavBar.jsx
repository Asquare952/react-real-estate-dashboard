import "./navbar.css";
import Logo from "../../assets/logo.png";
import { FaRegBell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import ProfileImg from "../../assets/Profile image.png";
import DashboardIcon from "../../assets/Dashboard.png";
import Building from "../../assets/building.png";
import Person from "../../assets/person.png";
import Star from "../../assets/star.png";
import Message from "../../assets/message.png";
import ProfileCircle from "../../assets/profile cicle.png";
import ProfileDropdownIcon from "../../assets/profile dropdown icon.png";
import SettingsIcon from "../../assets/settings-icon.png";
import LogoutIcon from "../../assets/logout icon.png";
import DarkModeToggleIcon from "../../assets/toggle-darkmode.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [searchInput, setSearchInput] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const showSideBar = () => {
    setSideBar(!sideBar);
  };
  const showSearchInput = () => {
    setSearchInput(!searchInput);
  };
  const showProfileDropdown = () => {
    setProfileDropdown(!profileDropdown);
  };
  return (
    <>
      <header>
        <div className="hearderContent">
          <div className="menuBar">
            <IoMdMenu className="menuIcon" onClick={showSideBar} />
          </div>

          <div className="logoAndSearchInput">
            <div className="desktopLogo">
              <Link to="/dashboard" className="logo">
                <img src={Logo} alt="" />
                <span>Yariga</span>
              </Link>
            </div>
            <div className="searchInput">
              <CiSearch className="searchIcon" onClick={showSearchInput} />
              <input type="text" placeholder="Search Property, Customer etc" />
            </div>
          </div>
          {searchInput ? (
            <div className="searchInputMobile">
              <div className="mobileSearchInput">
                <CiSearch className="searchIconMobile" />
                <input
                  type="search"
                  placeholder="Search Property, Customer etc"
                />
              </div>
            </div>
          ) : null}
          {/*  */}
          <div className="profileAndNotification">
            <FaRegBell className="notificationBell" />
            {profileDropdown ? (
              <div className="profileHeader" onClick={showProfileDropdown}>
                <img src={ProfileImg} alt="" className="profileAvater" />
                <div className="nameAndRole">
                  <p>Hawkins Maru</p>
                  <span>Company Manager</span>
                </div>
              </div>
            ) : (
              <div className="profileHeader" onClick={showProfileDropdown}>
                <img src={ProfileImg} alt="" className="profileAvater" />
                <div className="nameAndRole">
                  <p>Hawkins Maru</p>
                  <span>Company Manager</span>
                </div>
              </div>
            )}
          </div>
          {profileDropdown? <div className="profile-dropdown-container">
            <div className="profile-dropdown-content">
              <ul>
                <li>
                  <Link to='#'>
                    <img src={ProfileDropdownIcon} alt="" />
                    <span>Edit Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <img src={SettingsIcon} alt="" />
                    <span>Settings</span>
                  </Link>
                </li>
                <li>
                  <Link to='/signin'>
                    <img src={LogoutIcon} alt="" />
                    <span>Logout</span>
                  </Link>
                </li>
                <li>
                  <Link to="review">
                    <img src={DarkModeToggleIcon} alt="" />
                    <span>Dark Mode</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>: null}
          
        </div>
      </header>
      <nav className="side-nav-desktop">
        <div className="sideBarContent">
          <ul>
            <li>
              <Link to="/dashboard">
                <img src={DashboardIcon} alt="" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="property">
                <img src={Building} alt="" />
                <span>Property</span>
              </Link>
            </li>
            <li>
              <Link to="agent">
                <img src={Person} alt="" />
                <span>Agent</span>
              </Link>
            </li>
            <li>
              <Link to="review">
                <img src={Star} alt="" />
                <span>Review</span>
              </Link>
            </li>
            <li>
              <Link to="message">
                <img src={Message} alt="" />
                <span>Message</span>
              </Link>
            </li>
            <li>
              <Link to="profile">
                <img src={ProfileCircle} alt="" />
                <span>My Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={sideBar ? "side-nav-mobile active" : "side-nav-mobile"}>
        <div className="sideBarContent">
          <div className="mobileLogo">
            <div to="/dashboard" className="logo" onClick={showSideBar}>
              <img src={Logo} alt="" />
              <span>Yariga</span>
            </div>
          </div>
          <ul>
            <li>
              <Link to="/dashboard">
                <img src={DashboardIcon} alt="" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="property">
                <img src={Building} alt="" />
                <span>Property</span>
              </Link>
            </li>
            <li>
              <Link to="agent">
                <img src={Person} alt="" />
                <span>Agent</span>
              </Link>
            </li>
            <li>
              <Link to="review">
                <img src={Star} alt="" />
                <span>Review</span>
              </Link>
            </li>
            <li>
              <Link to="message">
                <img src={Message} alt="" />
                <span>Message</span>
              </Link>
            </li>
            <li>
              <Link to="profile">
                <img src={ProfileCircle} alt="" />
                <span>My Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
