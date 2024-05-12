
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import Link from "next/link";


export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	keywords: "Brainbox Research Institute"
};


export const dynamicParams = true

export async function generateStaticParams() {
	return [{ app: 'me' }, { app: 'you' }, { app: 'us' }]
}

// { params }: { params: { app: string } }
export default function AppConfigLayout({ children, params }: Readonly<{ children: React.ReactNode, params: { app: string } }>) {
	return (
		<section className="flex flex-row gap-5 px-3 lg:px-5">
			<aside className="card border rounded px-3 lg:px-5">
				sidenav
			</aside>

			<section className="card">
				{children}
			</section>
		</section>
	);
}
