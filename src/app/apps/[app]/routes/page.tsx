

export default function AppRoutes({ params }: { params: { app: string } }) {
	const { app } = params
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<h3>AppRoutes</h3>
			<h6>{app}</h6>
		</section>
	);
}
