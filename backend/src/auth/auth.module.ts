import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { StaffService } from 'src/staff/staff.service';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppointmentService } from 'src/appointment/appointment.service';
import { QueueService } from 'src/queue/queue.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    StaffService,
    PrismaService,
    AppointmentService,
    QueueService,
  ],
})
export class AuthModule {}
