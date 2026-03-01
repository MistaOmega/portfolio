import type { Action } from 'svelte/action';

interface InviewOptions {
	threshold?: number;
	once?: boolean;
}

export const inview: Action<HTMLElement, InviewOptions | undefined> = (node, options = {}) => {
	const { threshold = 0.15, once = true } = options;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-inview');
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.classList.remove('is-inview');
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
