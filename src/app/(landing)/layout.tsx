
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "../providers";
import clsx from "clsx";
import { Navbar } from "@/components/navbar";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "../favicon.ico",
		shortcut: "../favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	keywords: "Brainbox Research Institute"
};



export default function LandingLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<>
			<Navbar isLoggedIn />
			{children}

			<footer className="card rounded-none border-none px-3 py-3">
				<div className="container mx-auto flex flex-wrap justify-between gap-3">
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
