export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Devspace",
	description: "A developer space to accelerate software developement.",
	navItems: [
		{
			label: "Home",
			href: "/home",
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

	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],

	links: {
		// github: "https://github.com/nextui-org/nextui",
		// twitter: "https://twitter.com/getnextui",
		// docs: "https://nextui.org",
		// discord: "https://discord.gg/9b6yyZKmH4",
	},
};
