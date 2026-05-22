import { isNightHour, isSunday } from "./classifyHours";
import { isHoliday } from "./holidayDetector";
import { HourResult } from "./interfaces";

export function calculateHours(
  start: Date,
  end: Date
): HourResult {

  let current = new Date(start);

  let workedMinutes = 0;

  const result: HourResult = {
    normalHours: 0,
    nightHours: 0,
    sundayHours: 0,
    holidayHours: 0,

    extraDayHours: 0,
    extraNightHours: 0
  };

  while (current < end) {

    const next = new Date(current);

    next.setMinutes(next.getMinutes() + 1);

    workedMinutes++;

    const isExtra = workedMinutes > 480;

    if (isNightHour(current)) {

      if (isExtra) {
        result.extraNightHours += 1 / 60;
      } else {
        result.nightHours += 1 / 60;
      }

    } else {

      if (isExtra) {
        result.extraDayHours += 1 / 60;
      } else {
        result.normalHours += 1 / 60;
      }
    }

    if (isSunday(current)) {
      result.sundayHours += 1 / 60;
    }

    if (isHoliday(current)) {
      result.holidayHours += 1 / 60;
    }

    current = next;
  }

  return {
  normalHours: Number(result.normalHours.toFixed(2)),
  nightHours: Number(result.nightHours.toFixed(2)),
  sundayHours: Number(result.sundayHours.toFixed(2)),
  holidayHours: Number(result.holidayHours.toFixed(2)),
  extraDayHours: Number(result.extraDayHours.toFixed(2)),
  extraNightHours: Number(result.extraNightHours.toFixed(2))
};
}