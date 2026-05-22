"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePayment = calculatePayment;
function calculatePayment(hours, hourlyRate) {
    const normalPay = hours.normalHours * hourlyRate;
    const nightPay = hours.nightHours * hourlyRate * 1.35;
    const extraDayPay = hours.extraDayHours * hourlyRate * 1.25;
    const extraNightPay = hours.extraNightHours * hourlyRate * 1.75;
    const total = normalPay +
        nightPay +
        extraDayPay +
        extraNightPay;
    return {
        normalPay: Number(normalPay.toFixed(2)),
        nightPay: Number(nightPay.toFixed(2)),
        extraDayPay: Number(extraDayPay.toFixed(2)),
        extraNightPay: Number(extraNightPay.toFixed(2)),
        total: Number(total.toFixed(2))
    };
}
//# sourceMappingURL=calculatePayment.js.map