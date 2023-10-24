import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { StaffService } from '../staff/staff.service';

@Injectable()
export class DoctorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly staffService: StaffService,
  ) {}

  async createDoctor(data: CreateDoctorDto): Promise<void> {
    const isStaffExist = await this.staffService.findByUsername(data.username);

    if (isStaffExist) {
      throw new HttpException('Staff already exist', HttpStatus.BAD_REQUEST);
    }

    const { username, password, role, ...staffData } = data;

    data.role = 'DOCTOR';

    await this.prisma.staff.create({
      data: {
        username,
        password,
        role,
        DoctorAccount: {
          create: staffData,
        },
      },
    });
  }
}
