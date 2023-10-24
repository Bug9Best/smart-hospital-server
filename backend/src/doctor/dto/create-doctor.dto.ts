import { DoctorBranch } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';
import { CreateStaffDto } from 'src/staff/dto/create-staff.dto';

export class CreateDoctorDto extends CreateStaffDto {
  @IsString()
  prefix: string;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  url: string;
  @IsString()
  position: string;
  @IsEnum(DoctorBranch)
  branch: DoctorBranch;
}
