export interface Project {
	slug: string;
	title: string;
	description: string;
	techStack: string[];
	githubUrl?: string;
	liveUrl?: string;
	overview: string;
	role: string;
	featured?: boolean;
	stats?: { label: string; value: string }[];
}

export const projects: Project[] = [
	{
		slug: 'kinesis-control',
		title: 'Kinesis Control',
		description:
			'A post-sales device management platform composed of Java microservices and a React front-end',
		techStack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'TailwindCSS', 'Zustand', 'RxJS', 'Vite', 'Playwright', 'Oracle SQL', 'PostgreSQL', 'Microservices'],
		overview:
			'Kinesis Control is an internal platform for managing telematics devices after sale. It is composed of multiple Java microservices behind a React front-end. Significant work went into modernising both sides of the stack: upgrading the Java services, overhauling the front-end build and tooling, and introducing automated testing.',
		role: 'Worked across the full stack: Java microservice development and upgrades, React front-end modernisation including migration to React 18, TypeScript, TailwindCSS, Zustand, and RxJS, Vite build migration, Playwright test automation, and MEND security scanning in CI/CD.'
	},
	{
		slug: 'velocity',
		title: 'Velocity',
		description:
			'Customer-facing fleet telematics platform serving hundreds of thousands of businesses, providing dashboards, trip history, and live map viewing built on top of Kinesis Core',
		techStack: ['Python', 'React', 'TypeScript', 'JavaScript'],
		overview:
			'Velocity is the customer-facing layer of the Kinesis platform. It consumes the telemetry data processed by Kinesis Core, which handles millions of device messages per day, and surfaces it to end users as real-time dashboards, trip history, and live map views. The platform is used by hundreds of thousands of businesses worldwide for fleet management and vehicle tracking.',
		role: 'Development Squad Lead. Worked across the full stack, from frontend development in React and Python through to backend services, with direct contributions into Kinesis Core to improve end-to-end data flow. Covered the full journey from raw device telemetry through to what the customer sees on screen.'
	},
	{
		slug: 'kinesis-core',
		title: 'Kinesis Core',
		description:
			'The central API and high-throughput device message processor for the Kinesis platform',
		techStack: ['Java', 'Spring Boot', 'Cassandra', 'Artemis MQ'],
		overview:
			'Kinesis Core is the backbone of the Kinesis platform. It ingests, validates, and processes telemetry data from devices in real time via Artemis MQ, persisting to Cassandra. Downstream products across the suite consume its APIs for device data.',
		role: 'Worked on the message-processing pipeline and contributed to the API services consumed by downstream products. Also traced and resolved issues end-to-end from the Velocity layer, fixing them at the Core level to improve overall platform flow.'
	},
	{
		slug: 'kinesis-connect',
		title: 'Kinesis Connect',
		description:
			'An internal sales and provisioning platform for Radius Telematics, built with ASP.NET and SQL Server',
		techStack: ['ASP.NET', '.NET Framework', 'SQL Server', 'C#'],
		overview:
			'Kinesis Connect is an internal platform used to manage the sale and provisioning of telematics products. It exposes a REST API consumed by downstream systems across other business areas.',
		role: 'Maintained the application which is made in ASP.NET, wrote SQL Server stored procedures and queries, and contributed to REST API design and implementation.'
	},
	{
		slug: 'omenu',
		title: 'OMenu',
		description: 'ImGUI menu injection template for various graphics rendering frameworks',
		techStack: ['C++', 'ImGUI', 'DirectX 9', 'DirectX 10', 'DirectX 11', 'DirectX 12', 'OpenGL'],
		githubUrl: 'https://github.com/mistaomega/omenu',
		overview:
			'OMenu is an open-source C++ template for injecting ImGUI-based overlays into games and applications. It supports all major DirectX versions as well as OpenGL, providing a ready-to-use starting point for overlay and tooling development.',
		role: 'Sole author. Designed the multi-backend architecture, implemented rendering hooks for each graphics API, and published as an open-source reference project.'
	},
	{
		slug: 'nitrox',
		title: 'Subnautica Nitrox',
		description: 'An open-source multiplayer modification for the game Subnautica',
		techStack: ['C#', 'UnityEngine', 'Harmony'],
		githubUrl: 'https://github.com/mistaomega/nitrox',
		overview:
			'Nitrox is a community-driven open-source project that adds multiplayer functionality to the single-player survival game Subnautica. It uses runtime patching via Harmony to intercept game logic and synchronise world state across clients.',
		role: 'Contributed features and bug fixes to the multiplayer synchronisation layer, working with Harmony patches and Unity networking primitives.'
	},
	{
		slug: 'chappell',
		title: 'Chappell',
		description:
			'A Discord bot with book recommendations, game recommendations, YouTube upload watchers and more',
		techStack: ['Node.js', 'Discord.js', 'YouTube API', 'RAWG API', 'SQLite3'],
		githubUrl: 'https://github.com/mistaomega/chappell',
		overview:
			'Chappell is a feature-rich Discord bot built for a private community server. It integrates with external APIs to surface book and game recommendations, and monitors YouTube channels to post notifications when new videos are published.',
		role: 'Sole author. Designed and implemented all features, integrated third-party APIs, and set up SQLite3 persistence for user data and preferences.'
	},
	{
		slug: 'mmspc',
		title: 'MMSPC',
		description: 'Client site for a personal trainer, built with Next.js and deployed on Vercel',
		techStack: ['Next.js', 'React', 'Vercel'],
		liveUrl: 'https://mmspc.co.uk',
		overview:
			'A professional website built for a personal training client. Structured around conversion: credentials, approach, client achievements, and services all flow toward a clear booking call-to-action. Deployed on Vercel.',
		role: "Sole developer. Designed and built the full site to the client's brief."
	},
	{
		slug: 'portfolio',
		title: 'Personal Portfolio',
		description: 'This portfolio site, built with SvelteKit, Tailwind CSS v4, and Catppuccin theming',
		techStack: ['SvelteKit', 'Svelte 5', 'TypeScript', 'TailwindCSS v4', 'Vite'],
		githubUrl: 'https://github.com/mistaomega/portfolio',
		overview:
			"The site you're looking at. A statically generated portfolio built with SvelteKit and deployed via Vercel. Uses Svelte 5 runes, TailwindCSS v4, and the Catppuccin colour palette (Latte / Mocha).",
		role: 'Sole author. Designed and implemented the full site from scratch.'
	},
	{
		slug: 'youtube',
		title: 'Programming Education YouTube',
		description: 'A programming education channel with 80+ tutorials covering Python, JavaScript, React, and C++',
		techStack: ['Python', 'JavaScript', 'React', 'C++'],
		featured: true,
		stats: [
			{ label: 'Lifetime views', value: '1M+' },
			{ label: 'Subscribers', value: '2.5K' },
			{ label: 'Tutorials', value: '80+' }
		],
		overview:
			'A YouTube channel dedicated to making programming concepts accessible to developers at all skill levels. Covers topics ranging from Python scripting and C++ to React and modern JavaScript, with 80+ tutorials amassing over a million lifetime views and 2,500 subscribers.',
		role: 'Sole creator. Planned, recorded, edited, and published all content.'
	}
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}
