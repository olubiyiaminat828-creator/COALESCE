import { useState, useEffect } from "react";
import styles from "../styles/DashboardHeader.module.css";
import { useContext } from "react";
import { UserContext } from "../UserContext";
export default function DashboardHeader({ onMenuClick, details }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [userDetails, setUserDetails] = useState({}) 
  useEffect(() => {
      const getUserDetails = async() =>{
            const res = await fetch("http://localhost:3000/getUserDetails", {
              method: "GET",
              headers:{
                  "Content-type": "application/json"
              },
              credentials: "include"
            })
            const data = await res.json();
            setUserDetails(data)

      }
      getUserDetails()

  })
 console.log(userDetails)
  return (
    <header className={styles.header}>
      {/* Left — hamburger + greeting */}
      <div className={styles.left}>
        <button
          className={styles.menuBtn}
          onClick={onMenuClick}
          aria-label="Open sidebar"
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className={styles.greeting}>
          <h1 className={styles.greetingText}>Good morning, {userDetails.foundUser.username}👋</h1>
          <p className={styles.greetingSub}>You have 3 tasks due today</p>
        </div>
      </div>

      {/* Right — search + notifs + avatar */}
      <div className={styles.right}>
        <div className={`${styles.search} ${searchFocused ? styles.searchFocused : ""}`}>
          <svg className={styles.searchIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search tasks, projects…"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <span className={styles.searchShortcut}>⌘K</span>
        </div>

        <button className={styles.iconBtn} aria-label="Notifications" type="button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <span className={styles.notifDot} />
        </button>

        <div className={styles.avatar}>JD</div>
      </div>
    </header>
  );
}