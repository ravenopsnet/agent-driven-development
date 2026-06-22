import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

export default defineConfig({
  integrations: [
    starlight({
      title: 'RAVEN Web App Reference',
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Overview', slug: 'guides/overview' },
            { label: 'Architecture', slug: 'guides/architecture' },
          ],
        },
      ],
    }),
  ],
})
