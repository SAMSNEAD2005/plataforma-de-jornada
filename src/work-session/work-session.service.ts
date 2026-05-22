import {
  Injectable,
  NotFoundException
} from '@nestjs/common';

import {
  calculateHours,
  calculatePayment
} from 'labor-engine';

@Injectable()
export class WorkSessionService {

  calculate(data: any) {

    const start = new Date(data.startTime);

    const end = new Date(data.endTime);

    const hours = calculateHours(
      start,
      end
    );

    const payment = calculatePayment(
      hours,
      data.hourlyRate
    );

    return {
      hours,
      payment
    };
  }
}