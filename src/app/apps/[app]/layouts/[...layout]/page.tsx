
export async function generateStaticParams({ params }: { params: { app: string } }) {
	// Get all layouts related to this app and return
	return [{ layout: ['me'] }, { layout: ['you'] }, { layout: ['us'] }]
}

export default function AppLayout({ params }: { params: { layout: string } }) {
	const { layout } = params
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<h3>AppLayout</h3>
			<h6>{layout}</h6>
		</section>
	);
}
