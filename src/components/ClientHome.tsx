"use client";

import { useState } from "react";
import styles from "../app/page.module.css";
import { Project, Bio, Social } from "../types";
import Link from "next/link";

import ProjectCard from "./ProjectCard";

interface ClientHomeProps {
    initialBio: Bio | null;
    initialProjects: Project[];
    initialSocials: Social[];
}

export default function ClientHome({ initialBio, initialProjects, initialSocials }: ClientHomeProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Fallback data if CMS is empty or not configured
    const projects = initialProjects.length > 0 ? initialProjects : [
        {
            _id: "preview1",
            title: "Design System Surf",
            categories: ["UI/UX", "System Design"],
            publishedAt: new Date().toISOString(),
            mainImage: null,
            slug: "design-system-surf",
            body: "A meta-tool for design system extraction."
        },
        {
            _id: "preview2",
            title: "System Forge",
            categories: ["Product Design"],
            publishedAt: new Date().toISOString(),
            mainImage: null,
            slug: "system-forge",
            body: "Natural Language AI Command Bar for real-time styling."
        }
    ];

    const bio = initialBio || {
        title: "hi i am pxp brownie 24yo multidisciplinary self taught designer from india",
        content: "I am a builder driven by the same curiosity that once made me break my toys to see how they worked.\n\nToday, I architect digital products and brand identities that bridge the gap between complex systems and human behavior.\n\nWhen I’m not designing, I’m studying ancient Indian architecture, watching the Warriors, or finding the next great book to get lost in.",
        ctaText: "book a call",
        ctaLink: "#"
    };

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
                        <Link href="/about" className={styles.navLink}>ABOUT</Link>
                        <Link href="/case-studies" className={styles.navLink}>CASE STUDIES</Link>
                        <Link href="/" className={styles.navLink}>PROJECTS</Link>
                        <Link href="/impossible-list" className={styles.navLink}>IMPOSSIBLE LIST</Link>
                        <Link href="/work-with-me" className={styles.navLink}>WORK WITH ME</Link>
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
                                <h2 className={styles.bioTitle} dangerouslySetInnerHTML={{ __html: bio.title.replace('pxp brownie', '<span class="' + styles.bioTitleBold + '">pxp brownie</span>').replace('\n', '<br/>') }}>
                                </h2>
                                <div className={styles.bioText}>
                                    {bio.content.split('\n\n').map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.bioCTA}>
                                <img src="/calendar.svg" alt="Calendar" className={styles.calendarIcon} />
                                <span className={styles.ctaText}>{bio.ctaText}</span>
                            </div>
                            <div className={styles.socialLinks}>
                                {initialSocials.length > 0 ? (
                                    initialSocials.map(social => (
                                        <span key={social._id}>{social.platform}</span>
                                    ))
                                ) : (
                                    <>
                                        <span>linkedin</span>
                                        <span>twitter</span>
                                    </>
                                )}
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
                    <div className={styles.showcaseGrid}>
                        {projects.map(project => (
                            <ProjectCard key={project._id} project={project} />
                        ))}
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
