import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatUserDto } from './dto/create-user.dto';
import { User as UserModel } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByCitizenId(citizenId: string, option?: any): Promise<UserModel> {
    return await this.prisma.user.findUnique({
      where: { citizenId },
      ...option,
    });
  }

  async findByUserId(userId: string, option?: any): Promise<UserModel> {
    return await this.prisma.user.findUnique({
      where: { userId },
      ...option,
    });
  }

  async createUser(data: CreatUserDto): Promise<Omit<UserModel, 'password'>> {
    const { citizenId, password, ...patientRecord } = data;

    const isUserExist = await this.findByCitizenId(citizenId);

    if (isUserExist) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }

    const createUser = await this.prisma.user.create({
      data: {
        citizenId,
        password,
        PatientRecord: {
          create: { ...patientRecord, hnNumber: '' },
        },
      },
    });

    const hnNumber =
      new Date().getFullYear().toString().slice(2, 4) + createUser.userId;

    await this.prisma.patientRecord.update({
      where: { userId: createUser.userId },
      data: { hnNumber },
    });

    return createUser;
  }

  async updateAddress(userId: string, address: string): Promise<void> {
    const isUserExist = await this.findByUserId(userId);

    if (!isUserExist) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    await this.prisma.patientRecord.update({
      where: { userId },
      data: { address },
      include: { User: true },
    });
  }
}
