import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatUserDto } from './dto/create-user.dto';
import { Users } from './dto/user.dto';
import { AppointmentService } from 'src/appointment/appointment.service';
import { QueueService } from 'src/queue/queue.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly appointmentService: AppointmentService,
    private readonly queueService: QueueService,
  ) { }

  async findByCitizenId(citizenId: string, option?: any): Promise<Users> {
    return await this.prisma.user.findUnique({
      where: { citizenId },
      ...option,
    });
  }

  async findByUserId(userId: string, option?: any): Promise<Users> {
    return await this.prisma.user.findUnique({
      where: { userId },
      ...option,
    });
  }

  async getAll(): Promise<Users[]> {
    return await this.prisma.user.findMany();
  }

  async getUserDetails(userId: string): Promise<any> {
    const isUserExist = await this.findByUserId(userId);

    if (!isUserExist) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    return this.prisma.user.findUnique({
      where: { userId },
      include: {
        PatientRecord: {
          include: {
            Appointment: true,
            Qeue: true,
          },
        },
      },
    });
  }

  async generateHnNumber(citizenId: string): Promise<string> {
    const hnNumber =
      new Date().getFullYear().toString().slice(2, 4) +
      43 +
      citizenId.slice(8, 12);

    return hnNumber;
  }

  async createUser(data: CreatUserDto): Promise<Users> {
    const { citizenId, password, ...patientRecord } = data;

    const isUserExist = await this.findByCitizenId(citizenId);

    if (isUserExist) {
      console.log("user", isUserExist);
      throw new HttpException('มีผู้ใช้งานอยู่แล้ว', HttpStatus.BAD_REQUEST);
    }

    const hnNumber = await this.generateHnNumber(citizenId);

    const isHnNumberExist = await this.prisma.patientRecord.findUnique({
      where: { hnNumber: hnNumber },
    });

    if (isHnNumberExist) {
      console.log("hn", isHnNumberExist);
      throw new HttpException('มีเลขรหัส HN อยู่แล้ว', HttpStatus.BAD_REQUEST);
    }

    const createUser = await this.prisma.user.create({
      data: {
        citizenId,
        password,
        PatientRecord: {
          create: { ...patientRecord, hnNumber: hnNumber },
        },
      },
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

  async getAppointmentsByUserId(userId: string): Promise<any> {
    const isUserExist = await this.findByUserId(userId);

    if (!isUserExist) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    return this.appointmentService.findByUserId(userId);
  }

  async getQueuesByUserId(userId: string): Promise<any> {
    const isUserExist = await this.findByUserId(userId);

    if (!isUserExist) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    return this.queueService.findQueueByUserId(userId);
  }
}
