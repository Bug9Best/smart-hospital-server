import { ApiProperty } from '@nestjs/swagger';
import { StaffRole } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreateStaffDto {
  @IsString()
  username: string;
  @IsString()
  password: string;

  @ApiProperty({ enum: StaffRole })
  @IsEnum(StaffRole)
  role: StaffRole;
}
