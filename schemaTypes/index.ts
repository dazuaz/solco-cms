import { contentAbout } from "./contentAbout"
import { contentProject } from "./contentProject"

import { pages, page } from "./pages"
import { project } from "./project"
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contentAbout, contentProject, project, page, pages],
}