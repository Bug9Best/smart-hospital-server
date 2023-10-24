import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Appointment } from '@prisma/client';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAppointmentDto): Promise<Appointment> {
    const isAppointmentExist = await this.prisma.appointment.findMany({
      where: {
        AND: [
          { doctorId: data.doctorId },
          { userId: data.pateintId },
          { date: data.date },
        ],
      },
    });

    if (isAppointmentExist) {
      throw new HttpException(
        'Appointment already exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    const { pateintId, doctorId, ...rest } = data;
    return this.prisma.appointment.create({
      data: {
        ...rest,
        userId: pateintId,
        doctorId: doctorId,
      },
    });
  }

  async appointmentDetails(appointmentId: string): Promise<Appointment> {
    const isAppointmentExist = await this.prisma.appointment.findUnique({
      where: { id: appointmentId },
    });

    if (!isAppointmentExist) {
      throw new HttpException(
        'Appointment does not exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.prisma.appointment.findUnique({
      where: { id: appointmentId },
      include: {
        Doctor: true,
        Record: true,
      },
    });
  }

  async getAll(): Promise<Appointment[]> {
    return this.prisma.appointment.findMany();
  }
}
