import { type SchemaTypeDefinition } from 'sanity'

import project from './schemas/project'
import bio from './schemas/bio'
import social from './schemas/social'
import goal from './schemas/goal'
import services from './schemas/services'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [project, bio, social, goal, services],
}
