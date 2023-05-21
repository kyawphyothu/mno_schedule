export function handleShiftEvents(groups) {
	const eventDates = []; // Define an array to store the event dates
	const DatesByGroups = [
		0,
		// '2023-05-08',
		// '2023-05-10',
		// '2023-05-12',
		// '2023-05-14',
		'2022-12-23',
		'2022-12-25',
		'2022-12-27',
		'2022-12-29',
	]; //startup dates for different groups
	let startDate = new Date( DatesByGroups[groups] );

	// Define the duration of each segment in milliseconds
	const dayShiftDuration = 2 * 24 * 60 * 60 * 1000; // 2 days
	const restDuration = 2 * 24 * 60 * 60 * 1000; // 2 days
	const nightShiftDuration = 2 * 24 * 60 * 60 * 1000; // 2 days

	const separateDay = 1 * 24 * 60 * 60 * 1000; // 1 days

	// Define the total duration of the event in milliseconds
	const totalDuration = 8 * 24 * 60 * 60 * 1000;

	// Define the number of cycles you want to loop through
	const numCycles = 100;

	// Define an array of colors to assign to each segment
	const colors = ['green', 'black', 'blue'];

	// Loop through the desired number of cycles
	for (let i = 0; i < numCycles; i++) {
		// Calculate the start and end dates of each segment based on the current cycle
		const dayShiftStart = new Date(startDate.getTime() + i * totalDuration);
		const dayShiftEnd = new Date(
			dayShiftStart.getTime() + dayShiftDuration,
		);
		const dayRestStart = new Date(dayShiftEnd.getTime());
		const dayRestEnd = new Date(dayRestStart.getTime() + restDuration);
		const nightShiftStart = new Date(dayRestEnd.getTime());
		const nightShiftEnd = new Date(
			nightShiftStart.getTime() + nightShiftDuration,
		);
		const nightRestStart = new Date(nightShiftEnd.getTime());
		const nightRestEnd = new Date(nightRestStart.getTime() + restDuration);

		// Add the segment dates to the eventDates array
		eventDates.push({
			title: 'DayShift',
			start: dayShiftStart.toISOString().split('T')[0],
			end: dayShiftEnd.toISOString().split('T')[0],
			color: colors[0],
		});
		eventDates.push({
			title: 'OFF',
			start: dayRestStart.toISOString().split('T')[0],
			end: dayRestEnd.toISOString().split('T')[0],
			color: colors[1],
		});
		eventDates.push({
			title: 'NightShift',
			start: nightShiftStart.toISOString().split('T')[0],
			end: nightShiftEnd.toISOString().split('T')[0],
			color: colors[2],
		});
		eventDates.push({
			title: 'OFF',
			start: nightRestStart.toISOString().split('T')[0],
			end: nightRestEnd.toISOString().split('T')[0],
			color: colors[1],
		});
	}

	return eventDates;
}
