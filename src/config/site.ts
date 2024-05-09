export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Devspace",
	description: "A developer space to accelerate software developement.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
		label: "About",
		href: "/about",
		},
		{
		label: "Services",
		href: "/services",
		},
		{
		label: "Blog",
		href: "/blog",
		},
		{
		label: "Login",
		href: "/accounts/auth/login",
		},
	],

};
