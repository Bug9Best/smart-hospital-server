import { Module, ValidationPipe } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { StaffModule } from './staff/staff.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { DoctorModule } from './doctor/doctor.module';
import { APP_PIPE } from '@nestjs/core';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    UsersModule,
    StaffModule,
    AuthModule,
    PrismaModule,
    DoctorModule,
    EventModule,
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
