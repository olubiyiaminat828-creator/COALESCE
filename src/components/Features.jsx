import { useState, useEffect } from "react";
import styles from "../styles/Features.module.css";
const features = [
  {
    id: 1,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="10" height="10" rx="2" fill="currentColor" opacity="0.9" />
        <rect x="15" y="3" width="10" height="10" rx="2" fill="currentColor" opacity="0.4" />
        <rect x="3" y="15" width="10" height="10" rx="2" fill="currentColor" opacity="0.4" />
        <rect x="15" y="15" width="10" height="10" rx="2" fill="currentColor" opacity="0.15" />
      </svg>
    ),
    tag: "Planning",
    title: "Visual Project Boards",
    description:
      "Drag-and-drop kanban boards that adapt to your workflow. Group by status, priority, or assignee — the board reshapes itself to how your team thinks.",
    stat: "3×",
    statLabel: "faster sprint planning",
  },
  {
    id: 2,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
      </svg>
    ),
    tag: "Tracking",
    title: "Real-Time Progress",
    description:
      "Live completion bars, burndown charts, and milestone alerts — so your team always knows exactly where things stand, without the status-update meetings.",
    stat: "72%",
    statLabel: "avg. on-time delivery",
  },
  {
    id: 3,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="9" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="19" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M3 24c0-4 3-6 6-6h10c3 0 6 2 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    tag: "Collaboration",
    title: "Assign & Delegate",
    description:
      "Assign tasks to teammates, set deadlines, leave threaded comments, and get notified on every update — collaboration that happens inside the work, not around it.",
    stat: "10k+",
    statLabel: "teams collaborating",
  },
  {
    id: 4,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 14h16M6 8h10M6 20h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="8" r="2.5" fill="currentColor" />
      </svg>
    ),
    tag: "Priorities",
    title: "Smart Task Sorting",
    description:
      "Auto-sort tasks by due date, effort, or blocker status. Surface what actually matters each morning without building a single manual filter.",
    stat: "40%",
    statLabel: "less context-switching",
  },
  {
    id: 5,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 7h14v10a2 2 0 01-2 2H9a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="2" />
        <path d="M4 7h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 21l-2 3M17 21l2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    tag: "Automation",
    title: "Workflow Automation",
    description:
      "Trigger actions automatically: move tasks, ping teammates, close subtasks when a parent is done. Build powerful rules with zero code.",
    stat: "5 hrs",
    statLabel: "saved per team, per week",
  },
  {
    id: 6,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 7h7.5l-6 4.5 2.3 7L14 18.5 7.7 22.5 10 15.5 4 11h7.5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Insights",
    title: "Performance Analytics",
    description:
      "Team velocity, task completion trends, and workload heatmaps — all in one dashboard. Make better decisions with data that updates in real time.",
    stat: "98%",
    statLabel: "manager satisfaction",
  },
];

export default function Features() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span
            className={styles.eyebrow}
            data-aos="fade-down"
            data-aos-delay="0"
          >
            Why Coalesce
          </span>
          <h2
            className={styles.title}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Everything your team needs to<br />
            <em>ship work that matters</em>
          </h2>
          <p
            className={styles.subtitle}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Purpose-built tools for teams who move fast and need clarity at every step.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {features.map((f, i) => {
            // 3-column grid: stagger within each row, then offset second row
            const col = i % 3;          // 0 | 1 | 2
            const row = Math.floor(i / 3); // 0 | 1
            const cardDelay = row * 150 + col * 120;

            return (
              <div
                key={f.id}
                className={`${styles.card} ${hovered === f.id ? styles.cardHovered : ""}`}
                data-aos="fade-up"
                data-aos-delay={cardDelay}
                data-aos-duration="650"
                onMouseEnter={() => setHovered(f.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className={styles.cardTop}
                  data-aos="fade-right"
                  data-aos-delay={cardDelay + 100}
                  data-aos-duration="400"
                >
                  <div className={styles.icon}>{f.icon}</div>
                  <span className={styles.tag}>{f.tag}</span>
                </div>

                <h3
                  className={styles.cardTitle}
                  data-aos="fade-up"
                  data-aos-delay={cardDelay + 180}
                  data-aos-duration="400"
                >
                  {f.title}
                </h3>

                <p
                  className={styles.cardDesc}
                  data-aos="fade-up"
                  data-aos-delay={cardDelay + 260}
                  data-aos-duration="400"
                >
                  {f.description}
                </p>

                <div
                  className={styles.stat}
                  data-aos="zoom-in"
                  data-aos-delay={cardDelay + 340}
                  data-aos-duration="350"
                >
                  <span className={styles.statNumber}>{f.stat}</span>
                  <span className={styles.statLabel}>{f.statLabel}</span>
                </div>

                <div className={styles.cardLine} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}