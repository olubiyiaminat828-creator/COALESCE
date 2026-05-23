import styles from "../styles/DashboardActivity.module.css";

const activities = [
  { id: 1, user: "AR", name: "Aria R.",    action: "completed",  target: "Design system review",  time: "2m ago",  color: "#a5b4fc" },
  { id: 2, user: "JD", name: "You",        action: "commented on", target: "Deploy to staging",   time: "14m ago", color: "#6366f1" },
  { id: 3, user: "LM", name: "Leo M.",     action: "created",    target: "Performance audit",     time: "1h ago",  color: "#34d399" },
  { id: 4, user: "AR", name: "Aria R.",    action: "moved",      target: "User testing → Review", time: "2h ago",  color: "#a5b4fc" },
  { id: 5, user: "JD", name: "You",        action: "assigned",   target: "Write release notes to Leo", time: "3h ago", color: "#6366f1" },
  { id: 6, user: "LM", name: "Leo M.",     action: "uploaded",   target: "qa-report-v2.pdf",      time: "5h ago",  color: "#34d399" },
];

const projects = [
  { name: "Platform Launch", progress: 72, color: "#4f46e5", tasks: 18, done: 13 },
  { name: "Mobile App",      progress: 45, color: "#f59e0b", tasks: 24, done: 11 },
  { name: "API Redesign",    progress: 88, color: "#10b981", tasks: 10, done: 9  },
];

export default function DashboardActivity() {
  return (
    <div className={styles.col}>

      {/* Activity feed */}
      <div className={styles.card}>
        <div className={styles.cardHead}>
          <h2 className={styles.cardTitle}>Activity</h2>
          <button type="button" className={styles.seeAll}>See all</button>
        </div>
        <div className={styles.feed}>
          {activities.map((a, i) => (
            <div key={a.id} className={styles.feedItem} style={{ animationDelay: `${i * 60}ms` }}>
              <div className={styles.feedAvatar} style={{ background: a.color }}>
                {a.user}
              </div>
              <div className={styles.feedContent}>
                <p className={styles.feedText}>
                  <strong>{a.name}</strong> {a.action} <span className={styles.feedTarget}>{a.target}</span>
                </p>
                <span className={styles.feedTime}>{a.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project progress */}
      <div className={styles.card}>
        <div className={styles.cardHead}>
          <h2 className={styles.cardTitle}>Projects</h2>
          <button type="button" className={styles.seeAll}>View all</button>
        </div>
        <div className={styles.projects}>
          {projects.map((p) => (
            <div key={p.name} className={styles.project}>
              <div className={styles.projectTop}>
                <div className={styles.projectInfo}>
                  <span className={styles.projectDot} style={{ background: p.color }} />
                  <span className={styles.projectName}>{p.name}</span>
                </div>
                <span className={styles.projectPct} style={{ color: p.color }}>{p.progress}%</span>
              </div>
              <div className={styles.track}>
                <div
                  className={styles.fill}
                  style={{ width: `${p.progress}%`, background: p.color }}
                />
              </div>
              <div className={styles.projectMeta}>
                <span>{p.done} of {p.tasks} tasks done</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}