import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { StaffService } from 'src/staff/staff.service';

@Module({
  controllers: [DoctorController],
  providers: [DoctorService, PrismaService, StaffService],
})
export class DoctorModule {}
