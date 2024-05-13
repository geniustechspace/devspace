
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";


export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s || Home`,
	},
	description: siteConfig.description,
	icons: {
		icon: "../favicon.ico",
		shortcut: "../favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	keywords: siteConfig.keywords
};



export default function LandingPageLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<>
			<Navbar isLoggedIn />

			{children}

			<footer className="card border-l-0 border-r-0 px-3 py-3 drop-shadow-none">
				<div className="min-w-screen-2xl mx-auto flex flex-wrap justify-center gap-3">
					<Link target="blank"
						className="flex flex-wrap items-center gap-1 text-current"
						href="/"
						title="geniustechspace.com landing page"
					>
						<span className="text-default-600">All Right Reserved</span>
						<p className="font-bold">Genius Tech Space</p>
					</Link>
				</div>
			</footer>
		</>
	);
}
