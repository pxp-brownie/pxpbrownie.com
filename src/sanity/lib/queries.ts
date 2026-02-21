import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  categories,
  publishedAt,
  body,
  link
}`

export const bioQuery = groq`*[_type == "bio"][0] {
  _id,
  title,
  content,
  ctaText,
  ctaLink
}`

export const socialsQuery = groq`*[_type == "social"] {
  _id,
  platform,
  url
}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  categories,
  publishedAt,
  body,
  link
}`
