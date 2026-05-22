"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNightHour = isNightHour;
exports.isSunday = isSunday;
function isNightHour(date) {
    const hour = date.getHours();
    return hour >= 21 || hour < 6;
}
function isSunday(date) {
    return date.getDay() === 0;
}
//# sourceMappingURL=classifyHours.js.map