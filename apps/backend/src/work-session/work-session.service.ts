import { Injectable, NotFoundException } from '@nestjs/common';

import { calculateHours, calculatePayment } from 'labor-engine';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkSessionService {
  constructor(private prisma: PrismaService) {}

  async calculate(data: any) {
    const start = new Date(data.startTime);

    const end = new Date(data.endTime);

    const hours = calculateHours(start, end);

    const payment = calculatePayment(hours, data.hourlyRate);

    const session = await this.prisma.workSession.create({
      data: {
        startTime: start,
        endTime: end,

        hourlyRate: data.hourlyRate,

        normalHours: hours.normalHours,

        nightHours: hours.nightHours,

        sundayHours: hours.sundayHours,

        holidayHours: hours.holidayHours,

        extraDayHours: hours.extraDayHours,

        extraNightHours: hours.extraNightHours,

        totalPayment: payment.total,
      },
    });

    return {
      session,
      hours,
      payment,
    };
  }

  async findAll(
    page: number,
    limit: number,
    hourlyRate?: number,
    sort = 'createdAt',
    minPayment?: number,
    startDate?: string,
    endDate?: string,
  ) {
    const skip = (page - 1) * limit;

    const where: any = {};

    if (hourlyRate) {
      where.hourlyRate = hourlyRate;
    }

    if (minPayment) {
      where.totalPayment = {
        gte: minPayment,
      };
    }

    if (startDate || endDate) {
      where.createdAt = {};

      if (startDate) {
        where.createdAt.gte = new Date(startDate);
      }

      if (endDate) {
        where.createdAt.lte = new Date(endDate);
      }
    }

    const data = await this.prisma.workSession.findMany({
      skip,
      take: limit,

      where,

      orderBy: {
        [sort]: 'desc',
      },
    });

    const total = await this.prisma.workSession.count({
      where,
    });

    return {
      data,
      page,
      limit,
      total,
    };
  }

  async findOne(id: number) {
    const session = await this.prisma.workSession.findUnique({
      where: {
        id,
      },
    });

    if (!session) {
      throw new NotFoundException('Work session not found');
    }

    return session;
  }

  async remove(id: number) {
    const session = await this.prisma.workSession.findUnique({
      where: {
        id,
      },
    });

    if (!session) {
      throw new NotFoundException('Work session not found');
    }

    return this.prisma.workSession.delete({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: any) {
    const session = await this.prisma.workSession.findUnique({
      where: {
        id,
      },
    });

    if (!session) {
      throw new NotFoundException('Work session not found');
    }

    return this.prisma.workSession.update({
      where: {
        id,
      },
      data,
    });
  }
}
