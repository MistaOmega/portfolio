import { projects, getProjectBySlug } from '$lib/data/projects';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () =>
	projects.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
	const project = getProjectBySlug(params.slug);
	if (!project) {
		error(404, `Project "${params.slug}" not found`);
	}
	return { project };
};
