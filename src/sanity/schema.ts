import { type SchemaTypeDefinition } from 'sanity'

import project from './schemas/project'
import bio from './schemas/bio'
import social from './schemas/social'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [project, bio, social],
}
