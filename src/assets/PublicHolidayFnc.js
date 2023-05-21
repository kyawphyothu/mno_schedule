import { publicHolidays } from "./PublicHoliday";

export function getPublicHolidayByYear(year) {
	return publicHolidays.filter(publicHoliday => new Date(publicHoliday.start).getFullYear() === year);
  }
