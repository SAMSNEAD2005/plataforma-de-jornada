import Holidays from "date-holidays";

const holidays = new Holidays("CO");

export function isHoliday(date: Date): boolean {
  return Boolean(holidays.isHoliday(date));
}