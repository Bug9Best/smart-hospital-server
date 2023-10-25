import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { StaffService } from '../staff/staff.service';

@Injectable()
export class DoctorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly staffService: StaffService,
  ) { }

  async getAll(): Promise<any> {
    return await this.prisma.doctor.findMany();
  }

  async findById(doctorId: string): Promise<any> {
    const doctor = await this.prisma.doctor.findUnique({
      where: { id: doctorId },
    });

    if (!doctor) {
      throw new HttpException('ไม่พบข้อมูลหมอ', HttpStatus.BAD_REQUEST);
    }

    return doctor;
  }

  async createDoctor(data: CreateDoctorDto): Promise<void> {
    await this.prisma.doctor.create({
      data: data,
    });
  }

  async updateDoctor(id: string, data: CreateDoctorDto): Promise<void> {
    await this.prisma.doctor.update({
      where: { id: id },
      data: data,
    });
  }

  async deleteDoctor(id: string): Promise<void> {
    const isExist = await this.findById(id);
    if (!isExist) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'ไม่พบข้อมูลหมอ',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    await this.prisma.doctor.delete({
      where: { id: id },
    });
  }
}
