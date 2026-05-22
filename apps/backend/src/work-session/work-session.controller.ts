import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
  Query
} from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
  ApiResponse
} from '@nestjs/swagger';

import { WorkSessionService } from './work-session.service';

import { CreateWorkSessionDto }
from './dto/create-work-session.dto';

import { UpdateWorkSessionDto }
from './dto/update-work-session.dto';

@ApiTags('Work Session')

@Controller('work-session')

export class WorkSessionController {

  constructor(
    private readonly workSessionService: WorkSessionService
  ) {}

  @ApiOperation({
    summary: 'Calcular jornada laboral'
  })

  @ApiResponse({
    status: 201,
    description: 'Jornada calculada correctamente'
  })

  @Post('calculate')
  calculate(
    @Body() dto: CreateWorkSessionDto
  ) {
    return this.workSessionService.calculate(dto);
  }

  @Get()
  findAll(
    @Query('page') page = '1',
    @Query('limit') limit = '10',
    @Query('hourlyRate') hourlyRate?: string,
    @Query('sort') sort = 'createdAt',
    @Query('minPayment') minPayment?: string
  ) {

    return this.workSessionService.findAll(
      Number(page),
      Number(limit),

      hourlyRate
        ? Number(hourlyRate)
        : undefined,

      sort,

      minPayment
        ? Number(minPayment)
        : undefined
    );
  }

  @Get(':id')
  findOne(
    @Param('id') id: string
  ) {

    return this.workSessionService.findOne(
      Number(id)
    );
  }

  @Delete(':id')
  remove(
    @Param('id') id: string
  ) {

    return this.workSessionService.remove(
      Number(id)
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,

    @Body()
    dto: UpdateWorkSessionDto
  ) {

    return this.workSessionService.update(
      Number(id),
      dto
    );
  }
}