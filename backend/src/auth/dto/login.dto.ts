import { IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  citizenId: string;
  @IsString()
  password: string;
}

export class LoginStaffDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
}
