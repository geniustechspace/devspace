
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig, siteFooter } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={clsx(
				"min-h-screen bg-background font-sans antialiased flex flex-col justify-between",
				fontSans.variable, inter.className
			)}
			>
				<Providers attribute="class" defaultTheme="system" enableSystem>
					{children}
				</Providers>

				<footer className="card border-none p-3">
					<div className="max-w-screen-2xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2 text-small">
						{siteFooter.map((item) => (
							<Link target="blank" key={item.href}
								className="flex flex-wrap items-center gap-1 text-current hover:text-sky-600 hover:underline underline-offset-2"
								href={item.href}
								title={item.label}
							>
								<small className="font-bold"> {item.label} </small>
							</Link>
						))}
					</div>
				</footer>
			</body>
		</html>
	);
}
