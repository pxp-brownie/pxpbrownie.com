export interface Project {
    _id: string;
    title: string;
    slug: string;
    mainImage: any;
    categories: string[];
    publishedAt: string;
    body: string;
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

export interface Goal {
    _id: string;
    title: string;
    category: string;
    status: 'pending' | 'in-progress' | 'completed';
    completedDate?: string;
}

export interface Services {
    _id: string;
    title: string;
    headline: string;
    content: any;
    ctaText: string;
    ctaLink: string;
}
