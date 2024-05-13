import { Logo } from "@/components/icons";
import { ShowcaseBreadCrum, ShowcaseSlider } from "@/components/showcase";
import { siteConfig } from "@/config/site";
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";


export default function LandingPage() {
	return (
		<>
			<section className="max-w-screen-sm mx-auto text-center mt-16 lg:mt-28 px-10 xl:px-3">
				<h1 className="font-semibold font-mono text-2xl md:text-4xl xl:text-5xl">
					The Developers <span className="text-sky-600">Space</span>
				</h1>
				<p className="font-medium py-4 xl:py-6">
					Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.
				</p>
				<div className="flex flex-wrap justify-center w-full gap-6 lg:gap-8 mt-8 xl:mt-12">
					<Button
						as={Link} href="/" radius="full" color="primary" variant="solid"
						endContent={<FiChevronsRight />}
						className="h-8 lg:h-9 ring-offset-2 ring-1 ring-sky-600 dark:ring-offset-gray-800 font-semibold w-full max-w-56 sm:w-[45%]"
					>
						Get started
					</Button>
					<Button
						as={Link} href="/" radius="full" color="primary" variant="ghost"
						endContent={<FiChevronsRight />}
						className="h-8 lg:h-9 ring-offset-2 ring-1 ring-sky-600 dark:ring-offset-gray-800 font-semibold w-full max-w-56 sm:w-[45%] dark:text-white"
					>
						Documentation
					</Button>
				</div>
			</section>

			<section className="max-w-screen-2xl mx-auto text-center mt-20 lg:mt-28 px-3">
				<h3 className="font-semibold font-mono md:py-3">
					<span className="text-sky-600">Trusted by </span> these companies so far
				</h3>
				<ul className="flex flex-wrap justify-center gap-5 py-5">
					<li className="flex flex-nowrap items-center">
						<Logo />
						<p className="font-bold text-xl" aria-label="Brainbox Research Institute">{siteConfig.name}</p>
					</li>
					<li className="flex flex-nowrap items-center">
						<Logo />
						<p className="font-bold text-xl" aria-label="Brainbox Research Institute">{siteConfig.name}</p>
					</li>
					<li className="flex flex-nowrap items-center">
						<Logo />
						<p className="font-bold text-xl" aria-label="Brainbox Research Institute">{siteConfig.name}</p>
					</li>
					<li className="flex flex-nowrap items-center">
						<Logo />
						<p className="font-bold text-xl" aria-label="Brainbox Research Institute">{siteConfig.name}</p>
					</li>
					<li className="flex flex-nowrap items-center">
						<Logo />
						<p className="font-bold text-xl" aria-label="Brainbox Research Institute">{siteConfig.name}</p>
					</li>
				</ul>
			</section>

			<section className="rounded bg-primary shadow-md drop-shadow-lg text-white py-16 lg:py-24 my-8 lg:my-12 min-h-32">
				<div className="max-w-screen-sm mx-auto text-center">
					<h3 className="font-semibold font-mono text-2xl md:text-4xl">
						Build with us
					</h3>
					<p className="font-medium py-4 xl:py-6">
						Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.
						Well everything you need if you aren’t that picky about minor details like tax compliance.
					</p>
				</div>
			</section>

			<ShowcaseSlider />
			{/* <ShowcaseBreadCrum /> */}
		</>
	);
}
