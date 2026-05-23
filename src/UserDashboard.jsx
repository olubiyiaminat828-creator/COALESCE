import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import DashboardStats from "./components/Dashboardstats";
import DashboardTasks from "./components/DashboardTasks";
import DashboardActivity from "./components/DashboardActivity";
import styles from "./styles/UserDashboard.module.css";
import { createContext } from "react";
import { UserContext } from "./UserContext";
export default function UserDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
useEffect(() => {
    document.title = "User Dashboard | Page"
})
  return (
        <div className={styles.layout}>

      {/* ── Sidebar ─────────────────────────────── */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* ── Main area ───────────────────────────── */}
      <div className={styles.main}>

        <DashboardHeader onMenuClick={() => setSidebarOpen(true)}/>

        <div className={styles.content}>

          {/* Stats row */}
          <DashboardStats />

          {/* Tasks + Activity two-column grid */}
          <div className={styles.grid}>
            <div className={styles.tasksCol}>
              <DashboardTasks />
            </div>
            <div className={styles.activityCol}>
              <DashboardActivity />
            </div>
          </div>

        </div>
      </div>
    </div>
      );
}