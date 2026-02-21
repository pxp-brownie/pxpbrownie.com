import { client } from './client'
import { projectsQuery, bioQuery, socialsQuery } from './queries'

export async function getProjects() {
    return await client.fetch(projectsQuery)
}

export async function getBio() {
    return await client.fetch(bioQuery)
}

export async function getSocials() {
    return await client.fetch(socialsQuery)
}
