import { useEffect, useRef, useState } from "react";
import styles from "../styles/DashboardStats.module.css";

const stats = [
  {
    label: "Tasks Completed",
    value: 24,
    suffix: "",
    change: "+4 this week",
    up: true,
    color: "#4f46e5",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    label: "In Progress",
    value: 8,
    suffix: "",
    change: "2 due today",
    up: false,
    color: "#f59e0b",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: "Projects Active",
    value: 5,
    suffix: "",
    change: "1 launching soon",
    up: true,
    color: "#10b981",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    label: "Team Members",
    value: 12,
    suffix: "",
    change: "+2 this month",
    up: true,
    color: "#ec4899",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.85" />
      </svg>
    ),
  },
];

function useCountUp(target, duration = 1200, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, index, animate }) {
  const count = useCountUp(stat.value, 1000, animate);
  return (
    <div className={styles.card} style={{ animationDelay: `${index * 80}ms` }}>
      <div className={styles.cardTop}>
        <div className={styles.iconWrap} style={{ background: `${stat.color}18`, color: stat.color }}>
          {stat.icon}
        </div>
        <span className={`${styles.change} ${stat.up ? styles.changeUp : styles.changeWarn}`}>
          {stat.up ? "↑" : "⚠"} {stat.change}
        </span>
      </div>
      <div className={styles.value} style={{ color: stat.color }}>
        {animate ? count : 0}{stat.suffix}
      </div>
      <div className={styles.label}>{stat.label}</div>
    </div>
  );
}

export default function DashboardStats() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.grid} ref={ref}>
      {stats.map((s, i) => (
        <StatCard key={s.label} stat={s} index={i} animate={animate} />
      ))}
    </div>
  );
}