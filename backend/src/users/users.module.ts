import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppointmentService } from 'src/appointment/appointment.service';
import { QueueService } from 'src/queue/queue.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, AppointmentService, QueueService],
})
export class UsersModule {}
