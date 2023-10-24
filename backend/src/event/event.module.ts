import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { StaffService } from 'src/staff/staff.service';

@Module({
  controllers: [EventController],
  providers: [EventService, PrismaService, StaffService],
})
export class EventModule {}
