import { useEffect, useState } from "react";
import styles from "../styles/HowItWorks.module.css";

const steps = [
  {
    number: "01",
    tag: "Setup",
    title: "Create your workspace",
    description:
      "Sign up and invite your team in under two minutes. Import existing projects from Notion, Jira, or Trello — or start fresh with one of our ready-made templates.",
    visual: (
      <div className={styles.visual}>
        <div className={styles.visualCard}>
          <div className={styles.visualRow}>
            <div className={styles.avatar} style={{ background: "#c7d2fe" }} />
            <div className={styles.avatar} style={{ background: "#a5b4fc" }} />
            <div className={styles.avatar} style={{ background: "#818cf8" }} />
            <div className={styles.avatarAdd}>+</div>
          </div>
          <div className={styles.visualLabel}>Workspace · 3 members</div>
          <div className={styles.visualBar}>
            <div className={styles.visualBarFill} style={{ width: "100%" }} />
          </div>
          <div className={styles.visualMeta}>Setup complete</div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    tag: "Plan",
    title: "Break work into tasks",
    description:
      "Create projects, define milestones, and break goals into clear, assignable tasks. Set priorities, deadlines, and dependencies so nothing slips through the cracks.",
    visual: (
      <div className={styles.visual}>
        <div className={styles.visualCard}>
          {["Design system review", "Build onboarding flow", "Write API docs"].map((t, i) => (
            <div key={t} className={styles.taskRow}>
              <div className={`${styles.taskDot} ${i === 0 ? styles.taskDotDone : i === 1 ? styles.taskDotActive : styles.taskDotIdle}`} />
              <span className={`${styles.taskText} ${i === 0 ? styles.taskTextDone : ""}`}>{t}</span>
              <span className={styles.taskPill}>
                {i === 0 ? "Done" : i === 1 ? "Active" : "Todo"}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "03",
    tag: "Collaborate",
    title: "Work together in real time",
    description:
      "Assign tasks, leave threaded comments, attach files, and get instant notifications. Your whole team stays aligned — no more chasing updates over Slack or email.",
    visual: (
      <div className={styles.visual}>
        <div className={styles.visualCard}>
          <div className={styles.chatBubble} style={{ alignSelf: "flex-start" }}>
            <span className={styles.chatName}>Aria</span>
            <p className={styles.chatMsg}>API endpoint is ready for testing 🎉</p>
          </div>
          <div className={styles.chatBubble} style={{ alignSelf: "flex-end", background: "#4f46e5", color: "#fff" }}>
            <span className={styles.chatName} style={{ color: "#c7d2fe" }}>You</span>
            <p className={styles.chatMsg}>Nice! Moving to review now.</p>
          </div>
          <div className={styles.chatBubble} style={{ alignSelf: "flex-start" }}>
            <span className={styles.chatName}>Jay</span>
            <p className={styles.chatMsg}>I'll start the QA pass tonight.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    tag: "Track",
    title: "Ship with confidence",
    description:
      "Monitor progress with live dashboards, burndown charts, and milestone alerts. Spot blockers early, adjust timelines on the fly, and deliver — every time.",
    visual: (
      <div className={styles.visual}>
        <div className={styles.visualCard}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Platform Launch</span>
            <span className={styles.progressPct}>72%</span>
          </div>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: "72%" }} />
          </div>
          {[
            { label: "Finalize API spec", done: true },
            { label: "Design system review", done: true },
            { label: "Deploy to staging", done: false },
          ].map((item) => (
            <div key={item.label} className={styles.checkRow}>
              <span className={`${styles.checkIcon} ${item.done ? styles.checkIconDone : ""}`}>
                {item.done ? "✓" : "○"}
              </span>
              <span className={`${styles.checkLabel} ${item.done ? styles.checkLabelDone : ""}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section}>
      {/* Background grid lines */}
      <div className={styles.gridBg} aria-hidden="true" />

      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow} data-aos="fade-down" data-aos-delay="0">
            How It Works
          </span>
          <h2 className={styles.title} data-aos="fade-up" data-aos-delay="100">
            From idea to shipped —<br />
            <em>in four simple steps</em>
          </h2>
          <p className={styles.subtitle} data-aos="fade-up" data-aos-delay="200">
            Coalesce keeps your team focused on work that matters, not the coordination overhead around it.
          </p>
        </div>

        {/* Steps */}
        <div className={styles.steps}>
          {/* Connector line */}
          <div className={styles.connectorLine} aria-hidden="true" />

          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={step.number}
                className={`${styles.step} ${isEven ? styles.stepLeft : styles.stepRight}`}
                data-aos={isEven ? "fade-right" : "fade-left"}
                data-aos-delay={i * 120}
                data-aos-duration="700"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Content side */}
                <div className={styles.stepContent} data-aos="fade-up" data-aos-delay={i * 120 + 80} data-aos-duration="500">
                  <div className={styles.stepMeta}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <span className={styles.stepTag}>{step.tag}</span>
                  </div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                  <div className={`${styles.stepAccent} ${active === i ? styles.stepAccentActive : ""}`} />
                </div>

                {/* Node */}
                <div className={`${styles.node} ${active === i ? styles.nodeActive : ""}`} data-aos="zoom-in" data-aos-delay={i * 120 + 40}>
                  <span className={styles.nodeNumber}>{step.number}</span>
                </div>

                {/* Visual side */}
                <div
                  className={styles.stepVisual}
                  data-aos={isEven ? "fade-left" : "fade-right"}
                  data-aos-delay={i * 120 + 160}
                  data-aos-duration="500"
                >
                  {step.visual}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={styles.cta} data-aos="fade-up" data-aos-delay="300">
          <button className={styles.ctaBtn}>Get Started Free</button>
          <button className={styles.ctaBtnGhost}>See a Live Demo →</button>
        </div>

      </div>
    </section>
  );
}