import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsOptional()
  description: string;

  @IsDateString()
  date: Date;

  @IsString()
  img: string;

  @IsString()
  creatorId: string;
}
