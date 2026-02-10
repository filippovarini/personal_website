import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Filippo Varini",
			customCss: [
				"./src/styles/custom.css",
				"./src/styles/sharktrack.css",
			],
			logo: {
				src: "./src/assets/cactus.svg",
			},
			favicon: "./src/assets/cactus.svg",
			social: {
				github: "https://github.com/filippovarini",
				linkedin: "https://www.linkedin.com/in/filippo-varini/",
				email: "mailto:fppvrn@gmail.com",
			},
			pagefind: false,
			pagination: false,
			sidebar: [
				{
					label: "SharkTrack",
					items: [
						{ label: "Overview", link: "/sharktrack/" },
						{ label: "User Guide", link: "/sharktrack/user-guide/" },
						{ label: "Annotation Pipeline", link: "/sharktrack/annotation-pipeline/" },
					],
				},
			],
		}),
	],
});
