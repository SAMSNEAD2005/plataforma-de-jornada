import { Module } from '@nestjs/common';

import { WorkSessionController } from './work-session.controller';
import { WorkSessionService } from './work-session.service';

import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [WorkSessionController],

  providers: [
    WorkSessionService,
    PrismaService
  ],
})
export class WorkSessionModule {}