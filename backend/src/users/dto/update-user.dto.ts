import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  prefix: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsDateString()
  birthDate: Date;
}
