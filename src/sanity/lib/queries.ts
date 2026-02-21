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

export const goalsQuery = groq`*[_type == "goal"] | order(order asc) {
  _id,
  title,
  category,
  status,
  completedDate
}`

export const servicesQuery = groq`*[_type == "services"][0] {
  _id,
  title,
  headline,
  content,
  ctaText,
  ctaLink
}`

export const aboutQuery = groq`*[_type == "about"][0] {
  _id,
  title,
  headline,
  mainImage,
  story,
  skills,
  experience
}`

export const caseStudiesQuery = groq`*[_type == "project" && isCaseStudy == true] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  categories,
  publishedAt,
  body,
  link
}`
