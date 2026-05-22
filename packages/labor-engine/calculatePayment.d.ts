import { HourResult } from "./interfaces";
export interface PaymentResult {
    normalPay: number;
    nightPay: number;
    extraDayPay: number;
    extraNightPay: number;
    total: number;
}
export declare function calculatePayment(hours: HourResult, hourlyRate: number): PaymentResult;
//# sourceMappingURL=calculatePayment.d.ts.map