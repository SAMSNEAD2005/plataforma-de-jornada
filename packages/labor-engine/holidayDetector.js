"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHoliday = isHoliday;
const date_holidays_1 = __importDefault(require("date-holidays"));
const holidays = new date_holidays_1.default("CO");
function isHoliday(date) {
    return Boolean(holidays.isHoliday(date));
}
//# sourceMappingURL=holidayDetector.js.map