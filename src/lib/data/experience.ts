export interface ExperienceEntry {
	company: string;
	role: string;
	description: string;
}

export const experience: ExperienceEntry[] = [
	{
		company: 'Radius Telematics',
		role: 'Full-Stack Engineer',
		description:
			'Working on a suite of projects under the "Kinesis" banner. A collection of technologies for fleet telematics and vehicle tracking used across the globe. Built and maintained Java/Spring Boot microservices, contributed to an ASP.NET sales platform backed by SQL Server, and worked on a high-throughput device message processor using Cassandra and Artemis MQ.'
	},
	{
		company: 'Edge Hill University',
		role: 'AI Project Assistant',
		description:
			'Worked on a research project focused on predicting factory shutdowns using machine learning. Improved model accuracy through algorithm optimisation and hyperparameter tuning, and reduced data processing time by over 20 minutes by introducing a smart caching layer.'
	}
];
