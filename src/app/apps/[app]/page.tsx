// APP DETAIL PAGE

// App specific configurations

export default function AppConfigPage({ params }: { params: { app?: string } }) {
	const { app } = params
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<h3>AppConfigPage</h3>
			<h6>app =&gt; {app}</h6>
		</section>
	);
}
