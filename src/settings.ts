export const profile = {
	fullName: 'C. Tanner Murphey',
	title: 'PhD Student',
	institute: 'University of Illinois',
	author_name: 'C. T. Murphey', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		{title: 'Supernovae', description: 'I search for very recently exploded stars (supernovae) with the Dark Energy Camera as part of the Yound Supernova Experiment Collaboration.'}
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'murphey2[at]illinois.edu',
	bluesky: 'https://bsky.app/profile/murphey.bsky.social',
	github: 'https://github.com/ctmurphey',
}

export const template = {
	// website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	website_url: 'https://ctmurphey.github.io',
	menu_left: false,
	transitions: true,
	lightTheme: 'nord', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'night', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/' // Repository name starting with /
}

export const seo = {
	default_title: 'Tanner Murphey',
	default_description: 'PhD Student at UIUC hunting exploding stars.',
	default_image: '/images/astro-academia.png',
}
