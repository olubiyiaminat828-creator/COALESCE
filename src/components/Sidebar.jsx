import { useState } from "react";
import styles from "../styles/Sidebar.module.css";

const navItems = [
  {
    group: "Main",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        ),
        badge: null,
      },
      {
        id: "tasks",
        label: "My Tasks",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
          </svg>
        ),
        badge: "12",
      },
      {
        id: "projects",
        label: "Projects",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
          </svg>
        ),
        badge: null,
      },
      {
        id: "calendar",
        label: "Calendar",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
        ),
        badge: "3",
      },
      {
        id: "analytics",
        label: "Analytics",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
        badge: null,
      },
    ],
  },
  {
    group: "Workspace",
    items: [
      {
        id: "team",
        label: "Team",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
            <path d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.85" />
          </svg>
        ),
        badge: null,
      },
      {
        id: "inbox",
        label: "Inbox",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
            <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
          </svg>
        ),
        badge: "5",
      },
      {
        id: "settings",
        label: "Settings",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        ),
        badge: null,
      },
    ],
  },
];

const projects = [
  { id: 1, name: "Platform Launch", color: "#6366f1", progress: 72 },
  { id: 2, name: "Mobile App", color: "#f59e0b", progress: 45 },
  { id: 3, name: "API Redesign", color: "#10b981", progress: 88 },
];

export default function Sidebar({ isOpen, onClose }) {
  const [active, setActive] = useState("dashboard");

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className={styles.overlay} onClick={onClose} aria-hidden="true" />
      )}

      <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}>

        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoMark}>
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
              <path d="M11 1L20 6.5V15.5L11 21L2 15.5V6.5L11 1Z" stroke="#fff" strokeWidth="2" fill="none" />
              <path d="M11 7L15 9.5V14.5L11 17L7 14.5V9.5L11 7Z" fill="#fff" opacity="0.3" />
              <circle cx="11" cy="11" r="2" fill="#fff" />
            </svg>
          </div>
          <span className={styles.logoText}>Coalesce</span>

          {/* Close button — mobile only */}
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close sidebar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* User pill */}
        <div className={styles.userPill}>
          <div className={styles.userAvatar}>JD</div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>Jane Doe</span>
            <span className={styles.userRole}>Pro Plan</span>
          </div>
          <div className={styles.userStatus} title="Online" />
        </div>

        {/* Nav */}
        <nav className={styles.nav}>
          {navItems.map((group) => (
            <div key={group.group} className={styles.navGroup}>
              <span className={styles.navGroupLabel}>{group.group}</span>
              {group.items.map((item) => (
                <button
                  key={item.id}
                  className={`${styles.navItem} ${active === item.id ? styles.navItemActive : ""}`}
                  onClick={() => { setActive(item.id); onClose(); }}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span className={styles.navLabel}>{item.label}</span>
                  {item.badge && (
                    <span className={styles.navBadge}>{item.badge}</span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </nav>

        {/* Projects quick-access */}
        <div className={styles.projects}>
          <span className={styles.projectsLabel}>Recent Projects</span>
          {projects.map((p) => (
            <div key={p.id} className={styles.projectItem}>
              <span className={styles.projectDot} style={{ background: p.color }} />
              <span className={styles.projectName}>{p.name}</span>
              <span className={styles.projectPct}>{p.progress}%</span>
            </div>
          ))}
        </div>

        {/* Bottom upgrade CTA */}
        <div className={styles.upgrade}>
          <div className={styles.upgradeIcon}>⚡</div>
          <div>
            <div className={styles.upgradeTitle}>Upgrade to Team</div>
            <div className={styles.upgradeSub}>Unlock automation & analytics</div>
          </div>
        </div>

      </aside>
    </>
  );
}