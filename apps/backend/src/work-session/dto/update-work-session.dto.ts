import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsPositive
} from 'class-validator';

export class UpdateWorkSessionDto {

  @IsOptional()
  @IsDateString()
  startTime?: string;

  @IsOptional()
  @IsDateString()
  endTime?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  hourlyRate?: number;
}