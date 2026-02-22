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
        <Link href={`/projects/${project.slug}`} className={styles.projectCard}>
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
            <div className={styles.projectDetails}>
                <h3 className={styles.projectTitleRow}>
                    <span className={styles.projectTitle}>{project.title}</span>
                    {project.categories?.length > 0 && (
                        <>
                            <span className={styles.projectDot}>•</span>
                            <span className={styles.projectCategories}>
                                {project.categories.join(' • ').toUpperCase()}
                            </span>
                        </>
                    )}
                    {project.metric && (
                        <>
                            <span className={styles.projectDot}>•</span>
                            <span className={styles.projectMetric}>{project.metric}</span>
                        </>
                    )}
                </h3>
            </div>
        </Link>
    );
}
