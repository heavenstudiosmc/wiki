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
      favicon: '/favicon.png',
      customCss: ['./src/styles/celestial.css'],
      components: {
        // Default to the celestial dark theme when no preference is stored.
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      head: [
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
          },
        },
      ],
      logo: {
        src: './src/assets/heavenstudios.webp',
      },
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
