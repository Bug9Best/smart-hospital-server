import { IsString } from 'class-validator';

export class UpdateStaffDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
}
