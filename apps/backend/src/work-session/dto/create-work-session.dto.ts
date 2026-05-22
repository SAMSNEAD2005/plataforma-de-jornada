import { IsDateString, IsNumber, IsPositive } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkSessionDto {
  @ApiProperty({
    example: '2026-05-20T18:00:00',
    description: 'Hora inicial de la jornada',
  })
  @IsDateString()
  startTime!: string;

  @ApiProperty({
    example: '2026-05-21T04:00:00',
    description: 'Hora final de la jornada',
  })
  @IsDateString()
  endTime!: string;

  @ApiProperty({
    example: 10000,
    description: 'Valor por hora',
  })
  @IsNumber()
  @IsPositive()
  hourlyRate!: number;
}
