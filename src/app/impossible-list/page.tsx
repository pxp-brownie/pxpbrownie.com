import { getGoals } from "@/sanity/lib/data";
import styles from "../page.module.css";
import Link from "next/link";
import { Goal } from "@/types";

export default async function ImpossibleListPage() {
    const goals = await getGoals();

    const categories = Array.from(new Set(goals.map((g: Goal) => g.category)));

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
                    <h1 className={styles.secondaryTitle}>Impossible List</h1>
                    <p className={styles.secondarySubtitle}>
                        Inspired by Joel Runyon, this is not a bucket list. It's a list of things I thought were impossible at one point.
                    </p>

                    <div className={styles.goalsContainer}>
                        {categories.map((category: any) => (
                            <div key={category} className={styles.goalCategory}>
                                <h2 className={styles.categoryHeading}>{category}</h2>
                                <ul className={styles.goalList}>
                                    {goals
                                        .filter((g: Goal) => g.category === category)
                                        .map((goal: Goal) => (
                                            <li key={goal._id} className={`${styles.goalItem} ${styles[goal.status]}`}>
                                                <div className={styles.goalStatusDot}></div>
                                                <span className={styles.goalTitle}>{goal.title}</span>
                                                {goal.completedDate && (
                                                    <span className={styles.goalDate}>— {new Date(goal.completedDate).toLocaleDateString()}</span>
                                                )}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
