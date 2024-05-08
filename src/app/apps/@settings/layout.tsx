
import { Navbar } from "@/components/navbar";
import Link from "next/link";


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<section className="">
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
		</section>
	);
}
