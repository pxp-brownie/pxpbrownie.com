import { getProjectBySlug } from "@/sanity/lib/data";
import { notFound } from "next/navigation";
import styles from "../../page.module.css";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const imageUrl = project.mainImage ? urlForImage(project.mainImage).url() : "";

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <Link href="/" className={styles.backButton}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>BACK</span>
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

            <main className={styles.projectDetailMain}>
                <div className={styles.projectDetailContent}>
                    <div className={styles.projectDetailHero}>
                        {imageUrl && (
                            <img src={imageUrl} alt={project.title} className={styles.detailHeroImage} />
                        )}
                        <div className={styles.detailHeroText}>
                            <h1 className={styles.detailTitle}>{project.title}</h1>
                            <div className={styles.detailTags}>
                                {project.metric && (
                                    <span className={styles.detailTag} style={{ borderColor: 'var(--color-red-600)', color: 'var(--color-red-800)' }}>
                                        {project.metric}
                                    </span>
                                )}
                                {project.categories?.map((tag: string, i: number) => (
                                    <span key={i} className={styles.detailTag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.projectBody}>
                        {project.isCaseStudy && project.caseStudyBody ? (
                            <PortableText
                                value={project.caseStudyBody}
                                components={{
                                    types: {
                                        image: ({ value }: any) => {
                                            if (!value?.asset?._ref) {
                                                return null;
                                            }
                                            return (
                                                <figure>
                                                    <img
                                                        src={urlForImage(value).fit('max').auto('format').url()}
                                                        alt={value.alt || 'Project screenshot'}
                                                        loading="lazy"
                                                    />
                                                    {value.caption && <figcaption>{value.caption}</figcaption>}
                                                </figure>
                                            )
                                        }
                                    }
                                }}
                            />
                        ) : (
                            <PortableText value={project.body} />
                        )}
                    </div>

                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.projectExternalLink}
                        >
                            <span>View Live Project</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15L15 5M15 5H5M15 5V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    )}
                </div>
            </main>
        </div>
    );
}
