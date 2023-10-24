import { IsString } from 'class-validator';

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
  lastName: string;

  @IsString()
  birthDate: Date;
}
