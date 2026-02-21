import { client } from './client'
import { projectsQuery, bioQuery, socialsQuery, projectBySlugQuery, goalsQuery, servicesQuery, aboutQuery, caseStudiesQuery } from './queries'

export async function getProjects() {
    return await client.fetch(projectsQuery)
}

export async function getBio() {
    return await client.fetch(bioQuery)
}

export async function getSocials() {
    return await client.fetch(socialsQuery)
}

export async function getProjectBySlug(slug: string) {
    return await client.fetch(projectBySlugQuery, { slug })
}

export async function getGoals() {
    return await client.fetch(goalsQuery)
}

export async function getServices() {
    return await client.fetch(servicesQuery)
}

export async function getAbout() {
    return await client.fetch(aboutQuery)
}

export async function getCaseStudies() {
    return await client.fetch(caseStudiesQuery)
}
