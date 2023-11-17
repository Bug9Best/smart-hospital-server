import { IsDateString, IsString } from 'class-validator';

export class CreateQueueDto {
  @IsDateString()
  date: Date;

  @IsString()
  status: string;

  @IsString()
  userId: string;
}
