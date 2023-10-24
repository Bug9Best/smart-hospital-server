import { StaffRole } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreateStaffDto {
  @IsString()
  username: string;
  @IsString()
  password: string;

  @IsEnum(StaffRole)
  role: StaffRole;
}
