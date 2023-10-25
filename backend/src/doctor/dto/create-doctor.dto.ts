import { ApiProperty } from '@nestjs/swagger';
import { DoctorBranch } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  prefix: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  img: string;

  @IsString()
  position: string;

  @ApiProperty({ enum: DoctorBranch })
  @IsEnum(DoctorBranch)
  branch: DoctorBranch;
}
