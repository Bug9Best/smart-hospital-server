import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { Staff as StaffModel } from '@prisma/client';

@Injectable()
export class StaffService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(staffId: string, option?: any): Promise<StaffModel> {
    return await this.prisma.staff.findUnique({
      where: { staffId },
      ...option,
    });
  }

  async findByUsername(username: string, option?: any): Promise<StaffModel> {
    return await this.prisma.staff.findUnique({
      where: { username },
      ...option,
    });
  }

  async createStaff(data: CreateStaffDto): Promise<void> {
    const isStaffExist = await this.findByUsername(data.username);

    if (isStaffExist) {
      throw new HttpException('Staff already exist', HttpStatus.BAD_REQUEST);
    }

    await this.prisma.staff.create({
      data,
    });
  }
}
