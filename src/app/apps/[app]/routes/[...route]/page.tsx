
export async function generateStaticParams({ params }: { params: { app: string} }) {
	// Get all routes related to this app and return
	return [{ route: ['me'] }, { route: ['you'] }, { route: ['us'] }]
}

export default function AppRoute({ params }: { params: { route: string } }) {
	const { route } = params
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<h3>AppRoute</h3>
			<h6>{route}</h6>
		</section>
	);
}
