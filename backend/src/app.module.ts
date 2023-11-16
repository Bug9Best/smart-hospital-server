import { Module, ValidationPipe } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { StaffModule } from './staff/staff.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { DoctorModule } from './doctor/doctor.module';
import { APP_PIPE } from '@nestjs/core';
import { EventModule } from './event/event.module';
import { AppointmentModule } from './appointment/appointment.module';
import { QueueModule } from './queue/queue.module';
import { DrugModule } from './drug/drug.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    UsersModule,
    StaffModule,
    AuthModule,
    PrismaModule,
    DoctorModule,
    EventModule,
    AppointmentModule,
    QueueModule,
    DrugModule,
    ChatModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
