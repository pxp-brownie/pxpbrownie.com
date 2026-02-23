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
            {/* Main Layout Area */}
            <main className={styles.mainLayout}>
                {/* Left Sidebar Profile Section */}
                <aside className={styles.profileHero}>
                    <div className={styles.heroTopRow}>
                        <div className={styles.heroImagesCluster}>
                            <div className={styles.imgCasey}>
                                <img src="/figma_assets/d20992b369a5e899c24d9f9fd54fbe9e6b20aae7.png" alt="Casey" />
                            </div>
                            <div className={styles.imgGawx}>
                                <img src="/figma_assets/952b6181af3cc1b4031a46d48e213914edf45ccb.png" alt="Gawx" />
                            </div>
                            <div className={styles.imgCurryWarriors}>
                                <div className={styles.imgCurry}>
                                    <img src="/figma_assets/5510af947400455909c5d1f9b72f7a374b3705b9.png" alt="Curry" />
                                </div>
                                <div className={styles.imgWarriors}>
                                    <img src="/figma_assets/3aa16c30d77c1ef0f226392dd83f527b52653903.png" alt="Warriors" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.heroInspirationText}>
                            <p>
                                some of the things i love and
                                get inspiration from are placed
                                all around the website
                            </p>
                        </div>

                        <div className={styles.heroGroup31}>
                            <img src="/figma_assets/12df6d2dc5b76ab953a48e1b1b856e4cb7af9919.png" alt="Design Collage" />
                        </div>
                    </div>

                    <div className={styles.heroBioSection}>
                        <div className={styles.heroBioInner}>

                            <div className={styles.heroBioTitleRow}>
                                <div>
                                    hi i am
                                    <div className={styles.heroPxpbrownieStamp}>
                                        <img src="/figma_assets/pxpbrownie.svg" alt="PXP Brownie Stamp" />
                                    </div>
                                    24yo
                                </div>
                                <div>multidisciplinary self taught designer from india</div>
                            </div>

                            <div className={styles.heroBioDescription}>
                                {bio.content.split('\n\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>

                            <div className={styles.heroSolidCta}>
                                <img src="/figma_assets/ae2b27930ffc73d40646637e0766642b0d1130af.svg" alt="Calendar" className={styles.heroCalendarIcon} />
                                <span className={styles.heroCtaText}>BOOK A CALL</span>
                            </div>

                            <div className={styles.heroSocialLinks}>
                                {initialSocials.length > 0 ? (
                                    initialSocials.map(social => (
                                        <span key={social._id}>{social.platform}</span>
                                    ))
                                ) : (
                                    <>
                                        <span>linkedin</span>
                                        <span>twitter</span>
                                        <span>resume</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroFooter}>
                        <div className={styles.heroFooterContent}>
                            <div className={styles.heroStamp1}>
                            </div>
                            <div className={styles.heroFooterText}>
                                Designed by the ghats of kshipra
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Right Content Area */}
                <section className={styles.showcaseGallery}>
                    {projects.map(project => (
                        <ProjectCard key={project._id} project={project} />
                    ))}
                </section>
            </main>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
                <div className={styles.mobileMenuHeader}>
                    <img src="/logo-mobile.svg" alt="Logo Icon" className={styles.mobileMenuLogoIcon} />
                    <h1 className={styles.mobileMenuLogoText}>PXP BROWNIE</h1>
                </div>



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
