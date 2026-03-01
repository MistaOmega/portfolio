export interface SkillCategory {
	name: string;
	color: string;
	skills: string[];
}

export const skillCategories: SkillCategory[] = [
	{
		name: 'Languages',
		color: 'peach',
		skills: ['Java', 'C#', 'TypeScript', 'JavaScript', 'Python', 'C++', 'SQL']
	},
	{
		name: 'Frontend',
		color: 'sapphire',
		skills: ['Svelte', 'React', 'TailwindCSS', 'HTML', 'CSS']
	},
	{
		name: 'Backend',
		color: 'green',
		skills: ['Spring Boot', 'ASP.NET', 'Node.js', 'REST APIs', 'Microservices', 'Artemis MQ']
	},
	{
		name: 'Databases',
		color: 'mauve',
		skills: ['SQL Server', 'Oracle SQL', 'PostgreSQL', 'Cassandra', 'SQLite']
	},
	{
		name: 'Tools',
		color: 'yellow',
		skills: ['Git', 'AWS', 'Docker', 'Vite', 'Maven', 'Gradle', 'Linux', 'Machine Learning']
	}
];
