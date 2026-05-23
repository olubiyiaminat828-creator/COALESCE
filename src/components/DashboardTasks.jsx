import { useState } from "react";
import styles from "../styles/DashboardTasks.module.css";

const allTasks = [
  { id: 1, title: "Finalize API spec", project: "Platform Launch", priority: "High", due: "Today", done: true,  assignee: "JD" },
  { id: 2, title: "Design system review", project: "Mobile App",      priority: "High", due: "Today", done: true,  assignee: "AR" },
  { id: 3, title: "Deploy to staging",   project: "Platform Launch", priority: "Med",  due: "Today", done: false, assignee: "JD" },
  { id: 4, title: "Write release notes", project: "Platform Launch", priority: "Low",  due: "Tomorrow", done: false, assignee: "LM" },
  { id: 5, title: "User testing session",project: "Mobile App",      priority: "High", due: "Thu",   done: false, assignee: "AR" },
  { id: 6, title: "Update documentation",project: "API Redesign",    priority: "Med",  due: "Fri",   done: false, assignee: "JD" },
  { id: 7, title: "Performance audit",   project: "Platform Launch", priority: "Med",  due: "Next week", done: false, assignee: "LM" },
];

const priorityColor = { High: "#ef4444", Med: "#f59e0b", Low: "#10b981" };
const priorityBg    = { High: "#fef2f2", Med: "#fefce8", Low: "#f0fdf4" };
const filters = ["All", "Today", "In Progress", "Done"];

export default function DashboardTasks() {
  const [active, setActive]   = useState("All");
  const [tasks, setTasks]     = useState(allTasks);

  const filtered = tasks.filter((t) => {
    if (active === "Today")       return t.due === "Today";
    if (active === "In Progress") return !t.done;
    if (active === "Done")        return t.done;
    return true;
  });

  const toggle = (id) => {
    setTasks((prev) => prev.map((t) => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <h2 className={styles.title}>Tasks</h2>
        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={`${styles.filter} ${active === f ? styles.filterActive : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <button type="button" className={styles.addBtn}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add task
        </button>
      </div>

      <div className={styles.list}>
        {filtered.length === 0 && (
          <div className={styles.empty}>
            <span>🎉</span>
            <p>All clear here!</p>
          </div>
        )}
        {filtered.map((task, i) => (
          <div
            key={task.id}
            className={`${styles.task} ${task.done ? styles.taskDone : ""}`}
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <button
              type="button"
              className={`${styles.check} ${task.done ? styles.checkDone : ""}`}
              onClick={() => toggle(task.id)}
              aria-label="Toggle task"
              touch-action="manipulation"
            >
              {task.done && (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </button>

            <div className={styles.taskMain}>
              <span className={styles.taskTitle}>{task.title}</span>
              <span className={styles.taskProject}>{task.project}</span>
            </div>

            <div className={styles.taskMeta}>
              <span
                className={styles.priority}
                style={{ color: priorityColor[task.priority], background: priorityBg[task.priority] }}
              >
                {task.priority}
              </span>
              <span className={styles.due}>{task.due}</span>
              <div className={styles.assignee}>{task.assignee}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}