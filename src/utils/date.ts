export const getCurrentDate = (): Date => new Date();

const getTotalDaysInMonth = (year: number, month: number): number =>
	new Date(year, month + 1, 0).getDate();

export interface FormattedDay {
	date: string;
	day: string;
	month: number;
	monthName: string;
	year: string;
	dayName: string;
}

const formatDay = (year: number, month: number, day: number): FormattedDay => {
	const dayString = day.toString().padStart(2, "0");
	const monthString = month.toString().padStart(2, "0");
	const date = `${year}-${monthString}-${dayString}`;

	const dayName = new Date(date).toLocaleDateString("en-US", {
		weekday: "short",
	});

	const monthName = new Date(date).toLocaleDateString("en-US", {
		month: "long",
	});

	return {
		date,
		day: dayString,
		month: month,
		monthName: monthName,
		year: year.toString(),
		dayName,
	};
};

export const getDaysInCurrentMonth = (): FormattedDay[] => {
	const currentDate = getCurrentDate();
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth();

	const totalDays = getTotalDaysInMonth(currentYear, currentMonth);

	return Array.from({ length: totalDays }, (_, day) =>
		formatDay(currentYear, currentMonth, day + 1),
	);
};

export const getDaysInMonthYear = (
	year: number,
	month: number,
): FormattedDay[] => {
	const totalDays = getTotalDaysInMonth(year, month - 1);
	return Array.from({ length: totalDays }, (_, day) =>
		formatDay(year, month, day + 1),
	);
};
