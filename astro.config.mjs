// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://heavenstudiosmc.github.io',
  base: '/wiki',
  integrations: [
    starlight({
      title: 'Heaven Studios',
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.heavenstudios.site' }
      ],
      sidebar: [
        {
          label: 'Welcome & Info',
          items: [
            { label: 'Home', link: '/' },
            { label: 'About Us', link: '/about-us/' },
            { label: 'FAQ', link: '/faq/' }
          ],
        },
        {
          label: 'Support & Account',
          items: [
            { label: 'License Claiming', link: '/license/' }
          ],
        },
        {
          label: 'HeavenRandomKits',
          items: [
            { label: 'Overview', link: '/heavenrandomkits/' },
            { label: 'Getting Started', link: '/heavenrandomkits/getting-started/' },
            {
              label: 'Configuration',
              collapsed: false,
              items: [
                { label: 'Files & Settings', link: '/heavenrandomkits/configuration/' },
                { label: 'Permissions', link: '/heavenrandomkits/permissions/' },
                { label: 'Placeholders', link: '/heavenrandomkits/placeholders/' }
              ],
            },
            {
              label: 'Features & Mechanics',
              collapsed: false,
              items: [
                { label: 'Commands', link: '/heavenrandomkits/commands/' },
                { label: 'Systems & Events', link: '/heavenrandomkits/systems/' }
              ],
            }
          ],
        },
      ],
    }),
  ],
});
