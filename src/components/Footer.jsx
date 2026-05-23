import { useEffect } from "react";
import styles from "../styles/Footer.module.css";

const links = {
  Product: ["Features", "Workflows", "Integrations", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Brand Kit"],
  Resources: ["Documentation", "API Reference", "Community", "Status", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

const socials = [
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top divider wave */}
      <div className={styles.waveDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#f7f7f5" />
        </svg>
      </div>

      <div className={styles.inner}>

        {/* Brand column */}
        <div className={styles.brand} data-aos="fade-up" data-aos-delay="0">
          <div className={styles.logo}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 1L20 6.5V15.5L11 21L2 15.5V6.5L11 1Z" stroke="#4f46e5" strokeWidth="2" fill="none"/>
              <path d="M11 7L15 9.5V14.5L11 17L7 14.5V9.5L11 7Z" fill="#4f46e5" opacity="0.25"/>
              <circle cx="11" cy="11" r="2" fill="#4f46e5"/>
            </svg>
            <span className={styles.logoText}>Coalesce</span>
          </div>

          <p className={styles.tagline}>
            All-in-one platform to plan projects, assign tasks, and visualize progress — designed for seamless collaboration.
          </p>

          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.socialBtn}
                aria-label={s.label}
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className={styles.badge}>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.badgeText}>4.9 · Trusted by thousands of teams</span>
          </div>
        </div>

        {/* Link columns */}
        <div className={styles.linkColumns}>
          {Object.entries(links).map(([group, items], gi) => (
            <div
              key={group}
              className={styles.linkGroup}
              data-aos="fade-up"
              data-aos-delay={100 + gi * 80}
            >
              <h4 className={styles.groupTitle}>{group}</h4>
              <ul className={styles.linkList}>
                {items.map((item, li) => (
                  <li
                    key={item}
                    data-aos="fade-left"
                    data-aos-delay={160 + gi * 80 + li * 40}
                    data-aos-duration="400"
                  >
                    <a href="#" className={styles.link}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      {/* Newsletter bar */}
      <div className={styles.newsletterWrap} data-aos="fade-up" data-aos-delay="300">
        <div className={styles.newsletter}>
          <div className={styles.newsletterText}>
            <span className={styles.newsletterTitle}>Stay in the loop</span>
            <span className={styles.newsletterSub}>Product updates, tips, and team stories — no spam.</span>
          </div>
          <div className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="you@company.com"
              className={styles.newsletterInput}
            />
            <button className={styles.newsletterBtn}>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom} data-aos="fade-up" data-aos-delay="350">
        <span className={styles.copy}>© {new Date().getFullYear()} Coalesce, Inc. All rights reserved.</span>
        <div className={styles.bottomLinks}>
          <a href="#" className={styles.bottomLink}>Privacy</a>
          <span className={styles.dot} aria-hidden="true">·</span>
          <a href="#" className={styles.bottomLink}>Terms</a>
          <span className={styles.dot} aria-hidden="true">·</span>
          <a href="#" className={styles.bottomLink}>Cookies</a>
        </div>
      </div>
    </footer>
  );
}