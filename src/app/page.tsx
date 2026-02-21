"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.menuIcon} onClick={() => setIsMobileMenuOpen(true)}>
            <img src="/menu.svg" alt="Menu" />
          </button>
          <div className={styles.logoContainer}>
            <img src="/vector8.svg" alt="Logo Icon" className={styles.logoIcon} />
            <h1 className={styles.logoText}>
              <span>PXP</span>
              <span className={styles.logoTextDesktop}>BROWNIE</span>
            </h1>
          </div>
        </div>
        <div className={styles.headerRight}>
          <nav className={styles.navLinks}>
            <span className={styles.navLink}>ABOUT</span>
            <span className={styles.navLink}>CASE STUDIES</span>
            <span className={styles.navLink}>PROJECTS</span>
            <span className={styles.navLink}>IMPOSSIBLE LIST</span>
            <span className={styles.navLink}>WORK WITH ME</span>
          </nav>
          <div className={styles.callToAction}>
            <img src="/calendar.svg" alt="Calendar" className={styles.calendarIcon} />
            <span className={styles.ctaText}>book a call</span>
          </div>
        </div>
      </header>

      {/* Main Layout Area */}
      <main className={styles.mainLayout}>
        {/* Left Sidebar Profile Section */}
        <aside className={styles.profileHero}>
          <div className={styles.profileTopRow}>
            <div className={styles.leftImagesGroup}>
              <div className={styles.leftImagesComposite}></div>
            </div>

            <div className={styles.textInspiration}>
              <p>
                some of the things i love and<br />
                get inspiration from are placed<br />
                all around the website{" "}
                <svg width="24" height="10" viewBox="0 0 24 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', transform: 'translateY(-2px)' }}>
                  <path d="M1 5.5C6 5 12 4.5 19 4M14 1C15.5 2.5 17.5 3.5 21 4.5M14 9C15.5 7.5 17.5 6.5 21 4.5" stroke="#31938a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </p>
            </div>

            <div className={styles.rightImagesGroup}>
              <div className={styles.rightImagesComposite}></div>
            </div>
          </div>

          <div className={styles.bioSection}>
            <div className={styles.bioInner}>
              <div className={styles.bioTextWrapper}>
                <h2 className={styles.bioTitle}>
                  hi i am <span className={styles.bioTitleBold}>pxp brownie</span> 24yo
                  <br />
                  multidisciplinary self taught
                  <br />
                  designer from india
                </h2>
                <div className={styles.bioText}>
                  <p>I am a builder driven by the same curiosity that once made me break my toys to see how they worked.</p>
                  <br />
                  <p>Today, I architect digital products and brand identities that bridge the gap between complex systems and human behavior.</p>
                  <br />
                  <p>When I’m not designing, I’m studying ancient Indian architecture, watching the Warriors, or finding the next great book to get lost in.</p>
                </div>
              </div>
              <div className={styles.bioCTA}>
                <img src="/calendar.svg" alt="Calendar" className={styles.calendarIcon} />
                <span className={styles.ctaText}>book a call</span>
              </div>
              <div className={styles.socialLinks}>
                <span>linkedin</span>
                <span>twitter</span>
              </div>
            </div>
          </div>

          <div className={styles.profileFooter}>
            <div className={styles.profileFooterLeft}>
              <div className={styles.imgKshipraContainer}></div>
              <div className={styles.textDesigned}>
                Designed by the ghats of kshipra
              </div>
            </div>

            <div className={styles.profileFooterRight}>
              <div className={styles.imgGroup2Container}></div>
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <section className={styles.showcaseGallery}>
          <div className={styles.scrollArea}>
          </div>
        </section>
      </main>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuHeader}>
          <img src="/logo-mobile.svg" alt="Logo Icon" className={styles.mobileMenuLogoIcon} />
          <h1 className={styles.mobileMenuLogoText}>PXP BROWNIE</h1>
        </div>

        <nav className={styles.mobileMenuNavLinks}>
          <span className={styles.mobileMenuLink}>ABOUT</span>
          <span className={styles.mobileMenuLink}>CASE STUDIES</span>
          <span className={styles.mobileMenuLink}>PROJECTS</span>
          <span className={styles.mobileMenuLink}>IMPOSSIBLE LIST</span>
          <span className={styles.mobileMenuLink}>WORK WITH ME</span>
        </nav>

        <div className={styles.mobileMenuCallToAction}>
          <img src="/calendar-mobile.svg" alt="Calendar" className={styles.mobileMenuCalendarIcon} />
          <span className={styles.mobileMenuCtaText}>BOOK A CALL</span>
        </div>

        <div className={styles.mobileMenuFooter}>
          <button className={styles.mobileMenuCloseBtn} onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/x.svg" alt="Close" />
          </button>
        </div>
      </div>
    </div>
  );
}
