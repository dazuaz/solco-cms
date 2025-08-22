import { contentAbout } from "./contentAbout"
import { contentHome } from "./contentHome"
import { contentProject } from "./contentProject"
import { contentServices } from "./contentServices"
import { homepage } from "./homepage"
import { card, ourServicesSection } from "./ourServicesSection"

import { pages, page } from "./pages"
import { project } from "./project"
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, contentAbout, contentProject, contentHome, card, ourServicesSection, contentServices, project, page, pages],
}