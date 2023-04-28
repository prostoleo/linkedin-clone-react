export function formatDate(d: Date) {
	return new Intl.DateTimeFormat(navigator.language, {
		dateStyle: 'medium',
		timeStyle: 'short',
		// timeStyle: 'medium',
	}).format(d);
}
