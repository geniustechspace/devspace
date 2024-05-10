
export async function generateStaticParams({ params }: { params: { app: string } }) {
	// Get all components related to this app and return
return [{ component: ['me'] }, { component: ['you'] }, { component: ['us'] }]
}

export default function AppComponent({ params }: { params: { component: string } }) {
	const { component } = params
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<h3>AppComponent</h3>
			<h6>{component}</h6>
		</section>
	);
}
