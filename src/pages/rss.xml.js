import rss, {pagesGlobToRssItems} from "@astrojs/rss";

export async function get() {
	return rss({
		title: "Astro learner | Blog",
		description: "My journey learning Astro",
		site: "https://afethayvan.netlify.app/",
		items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
		customData: "<language>en-us</language>"
	});
}
