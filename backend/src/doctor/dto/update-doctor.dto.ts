import { ApiProperty } from '@nestjs/swagger';
import { DoctorBranch } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateDoctorDto {
  @IsOptional()
  @IsString()
  prefix: string;
  @IsOptional()
  @IsString()
  firstName: string;
  @IsOptional()
  @IsString()
  lastName: string;
  @IsOptional()
  @IsString()
  img: string;
  @IsOptional()
  @IsString()
  position: string;

  @IsOptional()
  @ApiProperty({ enum: DoctorBranch })
  @IsEnum(DoctorBranch)
  branch: DoctorBranch;
}
