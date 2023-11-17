import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQueueDto } from './dto/create-queue.dto';
import { Queue } from '@prisma/client';

@Injectable()
export class QueueService {
  constructor(private readonly prisma: PrismaService) {}

  async createQueue(data: CreateQueueDto): Promise<void> {
    await this.prisma.queue.create({
      data,
    });
  }

  async findAll(): Promise<any> {
    return await this.prisma.queue.findMany({
      include: {
        Record: true,
      },
      orderBy: {
        date: 'asc',
      },
    });
  }

  async findQueueByUserId(userId: string): Promise<any> {
    return await this.prisma.queue.findMany({
      where: {
        userId,
        status: 'WAITING',
        date: {
          gte: new Date().toISOString().slice(0, 10),
        },
      },
      include: {
        Record: true,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async updateStatus(queueId: number, status: string): Promise<Queue> {
    const isQueueExist = await this.prisma.queue.findUnique({
      where: { id: queueId },
    });

    if (!isQueueExist) {
      throw new HttpException(
        'Appointment does not exist',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.prisma.queue.update({
      where: { id: queueId },
      data: {
        status,
      },
    });
  }
}
