export interface Project {
    _id: string;
    title: string;
    slug: string;
    mainImage: any;
    categories: string[];
    publishedAt: string;
    metric?: string;
    body: string;
    caseStudyBody?: any;
    link?: string;
}

export interface Bio {
    _id: string;
    title: string;
    content: string;
    ctaText: string;
    ctaLink: string;
}

export interface Social {
    _id: string;
    platform: string;
    url: string;
}
