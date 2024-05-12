// APP DETAIL PAGE

// App specific configurations

export default function AppConfigPage({ params }: { params: { app?: string } }) {
	const { app } = params
	return (
		<section className="flex flex-col items-center justify-center gap-4">
			<div className="card">
				{app} Nav
			</div>

			<div className="">
				Main Page
			</div>
		</section>
	);
}
