
export const dynamicParams = true

export function generateStaticParams() {
	return [{ slug: "me" }, { slug: "you" }, { slug: "us" }]
  }


export default function AppConfigPage({ params }: { params: { slug: string } }) {
	const { slug } = params
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<h3>AppConfigPage</h3>
			<h6>{ slug }</h6>
		</section>
	);
}
