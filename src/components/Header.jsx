import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.heroContainer}>
      <div className={styles.heroInner}>
        
        {/* LEFT COLUMN: Text Content */}
        <div className={styles.heroLeft}>
          <div className={styles.ratingBadge} data-aos="fade-up">
            <div className={styles.ratingScore}>
              <span>4.9</span>
              <div className={styles.stars}>★★★★★</div>
            </div>
            <span className={styles.ratingSub}>Trusted by Thousands of Teams</span>
          </div>

          <h1 
            className={styles.heroTitle}
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            Coordinate your Work with <span className={styles.serifItalic}>Efficiency</span> and <span className={styles.serifItalic}>Flow</span>
          </h1>

          <p 
            className={styles.heroDescription}
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            All-in-one platform to plan projects, assign tasks, and visualize progress — designed for seamless collaboration.
          </p>

          <div data-aos="fade-up" data-aos-delay="300">
            <button className={styles.btnRequestDemo}>Request Demo</button>
          </div>
        </div>

        {/* RIGHT COLUMN: Small Compact UI Dashboard Panel */}
        <div 
          className={styles.heroRight}
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <div className={styles.uiCardPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.windowControls}>
                <span></span><span></span><span></span>
              </div>
              <span className={styles.panelTitle}>Project Overview</span>
            </div>
            
            <div className={styles.panelBody}>
              <div className={styles.projectProgressBox}>
                <div className={styles.projectInfo}>
                  <h4>Platform Launch</h4>
                  <span className={styles.badgeActive}>Active</span>
                </div>
                <div className={styles.progressBarBase}>
                  <div className={styles.progressBarFill} style={{ width: '72%' }}></div>
                </div>
                <span className={styles.progressPercent}>72% Completed</span>
              </div>

              <div className={styles.miniTaskList}>
                <div className={styles.taskItem}>
                  <div className={styles.taskCheckboxCheck}>✓</div>
                  <span className={styles.taskTextDone}>Finalize API spec</span>
                </div>
                <div className={styles.taskItem}>
                  <div className={styles.taskCheckboxCheck}>✓</div>
                  <span className={styles.taskTextDone}>Design system review</span>
                </div>
                <div className={styles.taskItem}>
                  <div className={styles.taskCheckboxActive}>◌</div>
                  <span className={styles.taskTextPending}>Deploy to staging</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;