import { getServices } from "@/sanity/lib/data";
import styles from "../page.module.css";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default async function WorkWithMePage() {
    const services = await getServices();

    const fallbackServices = {
        title: "Work With Me",
        headline: "Let's build something extraordinary together.",
        ctaText: "Book a Discovery Call",
        ctaLink: "https://cal.com/pxpbrownie",
        content: []
    };

    const data = services || fallbackServices;

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
                    <h1 className={styles.secondaryTitle}>{data.title}</h1>
                    <p className={styles.secondarySubtitle}>{data.headline}</p>

                    <div className={styles.servicesContent}>
                        {data.content && data.content.length > 0 ? (
                            <div className={styles.projectBody}>
                                <PortableText value={data.content} />
                            </div>
                        ) : (
                            <div className={styles.servicesPlaceholder}>
                                <p>I specialize in bridging the gap between design and engineering. Whether you need a full brand identity, a high-performance web application, or a design system that scales, I'm here to help.</p>
                                <div className={styles.serviceCards}>
                                    <div className={styles.serviceCard}>
                                        <h3>UI/UX Design</h3>
                                        <p>Digital products that feel human and function flawlessly.</p>
                                    </div>
                                    <div className={styles.serviceCard}>
                                        <h3>Development</h3>
                                        <p>Next-JS, React, and high-performance engineering.</p>
                                    </div>
                                    <div className={styles.serviceCard}>
                                        <h3>Design Systems</h3>
                                        <p>Building the foundation for your brand's future.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className={styles.ctaSection}>
                            <a
                                href={data.ctaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectExternalLink}
                            >
                                <span>{data.ctaText}</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
