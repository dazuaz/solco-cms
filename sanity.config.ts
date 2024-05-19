import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { structureTool } from 'sanity/structure'
import { schema } from './schemaTypes'
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  name: 'default',
  title: 'solco-cms',
  projectId: 'q24ff7vw',
  dataset: 'production',
  plugins: [structureTool(), visionTool(), dashboardTool({
    widgets: [
      netlifyWidget({
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Solco Production',
            apiId: '65019c5b-1a7c-49f1-a06e-d3e7d39f56bb',
            buildHookId: '65777aad294e944842d965cf',
            name: 'solco',
          },
        ]
      })
    ]
  })],
  schema
})

