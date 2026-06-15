export interface ExperienceEntry {
	company: string;
	role: string;
	roleHistory?: string[];
	startDate: string;
	endDate?: string;
	description: string;
}

export const experience: ExperienceEntry[] = [
	{
		company: 'Radius Telematics',
		role: 'Development Squad Lead',
		roleHistory: ['Full Stack Developer'],
		startDate: 'Sep 2022',
		description:
			'Leading a development squad on Velocity, the customer-facing platform for the Kinesis suite, used by hundreds of thousands of businesses worldwide for fleet telematics and vehicle tracking. Work end-to-end across the React and Python stack, tying in backend services and contributing directly to Kinesis Core, a high-throughput message processor handling millions of device messages per day.'
	},
	{
		company: 'Edge Hill University',
		role: 'AI Project Assistant',
		startDate: 'Jun 2022',
		endDate: 'Aug 2022',
		description:
			'Worked on a research project focused on predicting factory shutdowns using machine learning. Improved model accuracy through algorithm optimisation and hyperparameter tuning, and reduced data processing time by over 20 minutes by introducing a smart caching layer.'
	}
];
