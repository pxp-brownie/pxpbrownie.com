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
        <aside className={styles.leftSidebar}>
          <div className={styles.profileTop}>

            <div className={styles.imgCaseyContainer}>
              <img src="/casey.png" alt="Casey" className={styles.imgCasey} />
            </div>
            <div className={styles.imgGawxContainer}>
              <img src="/gawx.png" alt="Gawx" className={styles.imgGawx} />
            </div>

            <div className={styles.imgCurryContainer}>
              <img src="/curry.png" alt="Curry" className={styles.imgCurry} />
            </div>
            <div className={styles.imgWarriorsContainer}>
              <img src="/warriors.png" alt="Warriors" className={styles.imgWarriors} />
            </div>

            <div className={styles.imgDjangoContainer}>
              <img src="/django.png" alt="Django" className={styles.imgDjango} />
            </div>
            <div className={styles.imgGumpContainer}>
              <img src="/gump.png" alt="Gump" className={styles.imgGump} />
            </div>
            <div className={styles.imgYesTheoryContainer}>
              <img src="/yestheory.png" alt="Yes Theory" className={styles.imgYesTheory} />
            </div>

            <div className={styles.textInspiration}>
              {`some of the things i love and get inspiration from are placed all around the website`}
            </div>

            <div className={styles.bioSection}>
              <h2 className={styles.bioTitle}>
                {`hi i am `}
                <span style={{ fontFamily: 'var(--font-karantina)' }}>pxp brownie</span>
                <br /> {`24yo multidisciplinary self taught designer from india  `}
              </h2>
              <div className={styles.bioText}>
                <p>I am a builder driven by the same curiosity that once made me break my toys to see how they worked.</p>
                <br />
                <p>Today, I architect digital products and brand identities that bridge the gap between complex systems and human behavior.</p>
                <br />
                <p>When I’m not designing, I’m studying ancient Indian architecture, watching the Warriors, or finding the next great book to get lost in.</p>
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

            <div className={styles.profileImageContainer}>
              <img src="/me.png" alt="PXP Brownie" className={styles.profileImage} />
            </div>
            <div className={styles.textThisIsMe}>this is me</div>
          </div>

          <div className={styles.profileFooter}>
            <div className={styles.imgKshipraContainer}>
              <img src="/kshipra.png" alt="Kshipra" className={styles.imgKshipra} />
            </div>
            <div className={styles.textDesigned}>Designed by the ghats of kshipra</div>

            <div className={styles.imgViratContainer}>
              <img src="/virat.png" alt="Virat" className={styles.imgVirat} />
            </div>
            <div className={styles.imgNushratContainer}>
              <img src="/nushratsahab.png" alt="Nushrat" className={styles.imgNushrat} />
            </div>
            <div className={styles.textNushrat}>nushrat sahab is the best</div>
          </div>
        </aside>

        {/* Right Content Area */}
        <section className={styles.rightContent}>
          <div className={styles.scrollArea}>
            <div className={styles.placeholderCard}></div>
            <div className={styles.placeholderCard}></div>
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
