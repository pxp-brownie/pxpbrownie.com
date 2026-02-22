"use client";

import { Project } from "@/types";
import { urlForImage } from "@/sanity/lib/image";
import styles from "../app/page.module.css";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const imageUrl = project.mainImage ? urlForImage(project.mainImage).url() : "";

    return (
        <>
            {project.isCaseStudy ? (
                <Link href={`/projects/${project.slug}`} className={`${styles.projectCard} ${styles.projectCardClickable}`}>
                    <CardContent project={project} imageUrl={imageUrl} />
                </Link>
            ) : (
                <div className={styles.projectCard}>
                    <CardContent project={project} imageUrl={imageUrl} />
                </div>
            )}
        </>
    );
}

function CardContent({ project, imageUrl }: { project: Project, imageUrl: string }) {
    return (
        <>
            <div className={styles.projectTitleRow}>
                <div className={styles.projectTitleLeft}>
                    <span className={styles.projectName}>{project.title}</span>
                    {project.categories?.length > 0 && (
                        <span className={styles.projectTag}>
                            {project.categories.join(' ').toLowerCase()}
                        </span>
                    )}
                </div>
                {project.isCaseStudy && (
                    <div className={styles.projectTitleRight}>
                        <p className={styles.readMoreLink}>
                            {"VIEW PROJECT . >>>"}
                        </p>
                    </div>
                )}
            </div>
            <div className={styles.projectImageContainer}>
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={project.title}
                        className={styles.projectImage}
                    />
                ) : (
                    <div className={styles.projectImagePlaceholder}></div>
                )}
            </div>
        </>
    );
}
