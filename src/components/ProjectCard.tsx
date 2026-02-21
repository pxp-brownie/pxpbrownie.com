"use client";

import { Project } from "@/types";
import { urlForImage } from "@/sanity/lib/image";
import styles from "../app/page.module.css";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const imageUrl = project.mainImage ? urlForImage(project.mainImage).url() : "";

    return (
        <div className={styles.projectCard}>
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
                <div className={styles.projectOverlay}>
                    <div className={styles.projectTags}>
                        {project.categories?.map((category, index) => (
                            <span key={index} className={styles.projectTag}>{category}</span>
                        ))}
                    </div>
                    <div className={styles.projectHeader}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectLink}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
