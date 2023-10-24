import { Optional } from '@nestjs/common';
import { IsDateString, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @IsDateString()
  date: Date;

  @IsString()
  title: string;

  @Optional()
  description: string;

  @IsString()
  pateintId: string;

  @IsString()
  doctorId: string;
}
