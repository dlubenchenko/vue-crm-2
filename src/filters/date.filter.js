export default function dateFilter(value, format = 'date') {
	const options = {}

	if (format.includes('date')) {
		options.day = '2-digit'
		options.month = 'short'
		options.year = '2-digit'
	}

	if (format.includes('time')) {
		options.hour = '2-digit'
		options.minute = '2-digit'
		options.second = '2-digit'
		options.hour12 = false
	}

	return new Intl.DateTimeFormat('en-US', options)
		.format(new Date(value))
		.toUpperCase()
}
