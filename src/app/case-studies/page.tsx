import { getCaseStudies } from "@/sanity/lib/data";
import styles from "../page.module.css";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";

export default async function CaseStudiesPage() {
    const projects = await getCaseStudies();

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
                    <div className={styles.callToAction} data-cal-link="pxpbrownie" data-cal-config='{"layout":"month_view"}'>
                        <img src="/calendar.svg" alt="Calendar" className={styles.calendarIcon} />
                        <span className={styles.ctaText}>book a call</span>
                    </div>
                </div>
            </header>

            <main className={styles.secondaryMain}>
                <div className={styles.secondaryContent}>
                    <h1 className={styles.secondaryTitle}>Case Studies</h1>
                    <p className={styles.secondarySubtitle}>Detailed narratives of my design process and strategic thinking.</p>

                    <div className={styles.showcaseGrid}>
                        {projects.length > 0 ? (
                            projects.map((project: Project) => (
                                <ProjectCard key={project._id} project={project} />
                            ))
                        ) : (
                            <p>Case studies coming soon. I'm currently documenting my most recent work.</p>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
