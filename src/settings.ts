export const profile = {
	fullName: 'Tanner Murphey',
	title: 'PhD Student',
	institute: 'UIUC',
	author_name: 'C. T. Murphey', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		{title: 'Supernovae', description: 'I study the brightest explosions in the universe, the ones that create many of the elements we need for life as well as tell us about the very history of the universe we live in.', field:'physics'},
		{title: 'Data Science', description: "I'm an LSST-DA Data Science Fellow specializing in the study of large populations of supernovae. By studying these at a population level, we can answer questions like \"How vast is the universe expanding?\" and \"How did the elements past Carbon get to the abundances we see them at today?\"", field:'computer-science'},
		{title: 'High Performance Computing', description: "I work with extreme amounts of raw image data, well over 100TB. To process this, I use the Illinois Campus Cluster and am a member of the Center for Astrophysical Surveys at the National Center for Supercomputing Applications", field: 'engineering'}
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'murphey2[at]illinois.edu',
	github: 'https://github.com/ctmurphey',
	reddit: 'https://www.reddit.com/user/just-an-astronomer',
	bluesky: 'https://bsky.app/profile/murphey.bsky.social',
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
