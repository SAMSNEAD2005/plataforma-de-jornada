import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { WorkSessionModule } from './work-session/work-session.module';

import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [WorkSessionModule],

  controllers: [AppController],

  providers: [
    AppService,
    PrismaService
  ],
})
export class AppModule {}