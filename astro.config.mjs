import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Filippo Varini',
			customCss: [
				'./src/styles/custom.css',
			  ],
			logo: {
				src: './src/assets/cactus.svg',
			  },
			social: {
				github: 'https://github.com/filippovarini',
				linkedin: 'https://www.linkedin.com/in/filippo-varini/',
				instagram: 'https://www.instagram.com/filippo.varini/'
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
