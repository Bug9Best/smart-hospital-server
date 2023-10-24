import { IsDateString, IsString } from 'class-validator';

export class CreatUserDto {
  @IsString()
  citizenId: string;

  @IsString()
  password: string;

  @IsString()
  prefix: string;

  @IsString()
  firstName: string;

  @IsString()
  address: string;

  @IsString()
  lastName: string;

  @IsDateString()
  birthDate: Date;
}
