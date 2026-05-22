export function isNightHour(date: Date): boolean {
  const hour = date.getHours();

  return hour >= 21 || hour < 6;
}

export function isSunday(date: Date): boolean {
  return date.getDay() === 0;
}