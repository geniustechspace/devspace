import { ShowcaseBreadCrum, ShowcaseSlider } from "@/components/showcase";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";


export default function LandingPage() {
	return (
		<>
			<section className="w-5/6 md:w-2/3 xl:w-3/5 mx-auto text-center flex flex-col items-center gap-3 py-12 lg:py-24 px-3">
				<h1 className="font-semibold font-mono text-2xl md:text-4xl xl:text-6xl ">
					The Developers <span className="text-sky-600">Space</span>
				</h1>
				<h6 className="font-medium md:text-md xl:text-xl">
					Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.
				</h6>
				<div className="flex flex-row flex-wrap justify-center w-full gap-3 pt-3">
					<Button
						as={Link} href="/" radius="full" color="primary" variant="solid"
						endContent={<FiChevronsRight />}
						className="h-8 lg:h-9 ring-offset-2 ring-1 ring-sky-600 dark:ring-offset-gray-800 font-semibold w-full max-w-64 md:w-[45%] md:max-w-44"
					>
						Get started
					</Button>
					<Button
						as={Link} href="/" radius="full" color="primary" variant="ghost"
						endContent={<FiChevronsRight />}
						className="h-8 lg:h-9 ring-offset-2 ring-1 ring-sky-600 dark:ring-offset-gray-800 font-semibold w-full max-w-64 md:w-[45%] md:max-w-44 dark:text-white"
					>
						Get started
					</Button>
				</div>
			</section>
			<ShowcaseSlider />
			<ShowcaseBreadCrum />
		</>
	);
}
