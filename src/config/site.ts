export type SiteConfig = typeof siteConfig;

export const internalUrls = {
	// Base URL
	home: '/',

	// Auth URLs
	auth: '/auth',
	login: '/auth/login',
	signUp: '/auth/signup',

	// Navigation URLs
	getStarted: '/get-started',
	showcase: '/showcase',
	docs: '/docs',
	resources: '/resources',
	blog: '/blog',
}

export const siteConfig = {
	name: "Devspace",
	keywords: "Devspace",
	description: "A developer space to accelerate software developement.",
	navItems: [
		{
			label: "Showcase",
			href: internalUrls.showcase,
		},
		{
			label: "Documentation",
			href: internalUrls.docs,
		},
		{
			label: "Resources",
			href: internalUrls.resources,
		},
		{
			label: "Blog",
			href: internalUrls.blog,
		},
	],

};

export const siteFooter = [
	{
		label: "© 2024 Genius Tech Space",
		href: internalUrls.home,
	},
	{
		label: "Devspace",
		href: internalUrls.docs,
	},
	{
		label: "Terms",
		href: internalUrls.home,
	},
	{
		label: "Privacy",
		href: internalUrls.home,
	},
]

