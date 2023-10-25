import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { Staff as StaffModel } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StaffService {
  constructor(private readonly prisma: PrismaService) { }

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

  async findAll(option?: any): Promise<StaffModel[]> {
    return await this.prisma.staff.findMany({
      ...option,
    });
  }

  async createStaff(data: CreateStaffDto): Promise<void> {
    const isStaffExist = await this.findByUsername(data.username);

    if (isStaffExist) {
      throw new HttpException('Staff already exist', HttpStatus.BAD_REQUEST);
    }

    const { password, ...rest } = data;

    const hashPassword = await bcrypt.hash(password, 10);

    await this.prisma.staff.create({
      data: {
        ...rest,
        password: hashPassword,
      },
    });
  }

  async updateStaff(id: string, data: CreateStaffDto): Promise<void> {
    await this.prisma.staff.update({
      where: { staffId: id },
      data: data,
    });
  }

  async deleteStaff(id: string): Promise<void> {
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

    await this.prisma.staff.delete({
      where: { staffId: id },
    });
  }
}
