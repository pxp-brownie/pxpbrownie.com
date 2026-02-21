import { getAbout } from "@/sanity/lib/data";
import styles from "../page.module.css";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

export default async function AboutPage() {
    const about = await getAbout();

    if (!about) {
        return (
            <div className={styles.container}>
                <div className={styles.secondaryMain}>
                    <h1 className={styles.secondaryTitle}>About</h1>
                    <p>This page is currently being drafted in Sanity.</p>
                    <Link href="/" className={styles.backButton}>Back Home</Link>
                </div>
            </div>
        );
    }

    const imageUrl = about.mainImage ? urlForImage(about.mainImage).url() : "";

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <Link href="/" className={styles.backButton}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>HOME</span>
                    </Link>
                </div>
                <div className={styles.logoContainer}>
                    <img src="/vector8.svg" alt="Logo Icon" className={styles.logoIcon} />
                    <h1 className={styles.logoText}>
                        <span>PXP</span>
                        <span className={styles.logoTextDesktop}>BROWNIE</span>
                    </h1>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.callToAction}>
                        <img src="/calendar.svg" alt="Calendar" className={styles.calendarIcon} />
                        <span className={styles.ctaText}>book a call</span>
                    </div>
                </div>
            </header>

            <main className={styles.secondaryMain}>
                <div className={styles.secondaryContent}>
                    <h1 className={styles.secondaryTitle}>{about.title}</h1>
                    <p className={styles.secondarySubtitle}>{about.headline}</p>

                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutStory}>
                            <div className={styles.projectBody}>
                                <PortableText value={about.story} />
                            </div>
                        </div>

                        <aside className={styles.aboutSidebar}>
                            {imageUrl && (
                                <img src={imageUrl} alt="PXP Brownie" className={styles.aboutProfileImage} />
                            )}

                            <div className={styles.skillsSection}>
                                <h3 className={styles.sidebarHeading}>Skills</h3>
                                <div className={styles.skillTags}>
                                    {about.skills?.map((skill: string, i: number) => (
                                        <span key={i} className={styles.detailTag}>{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.experienceSection}>
                                <h3 className={styles.sidebarHeading}>Experience</h3>
                                <div className={styles.experienceList}>
                                    {about.experience?.map((exp: any, i: number) => (
                                        <div key={i} className={styles.experienceItem}>
                                            <span className={styles.expRole}>{exp.role}</span>
                                            <span className={styles.expCompany}>{exp.company}</span>
                                            <span className={styles.expDuration}>{exp.duration}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
}
