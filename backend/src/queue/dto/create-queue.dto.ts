import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import { IsDateString, IsEnum, IsString } from 'class-validator';

export class CreateQueueDto {
  @IsDateString()
  date: Date;

  @ApiProperty({
    enum: Status,
    description: 'The status of the queue',
    default: Status.WAITING,
  })
  @IsEnum(Status)
  status: Status;

  @IsString()
  userId: string;
}
