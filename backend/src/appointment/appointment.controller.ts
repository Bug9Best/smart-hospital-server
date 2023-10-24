import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { ApiTags } from '@nestjs/swagger';
import { Status } from '@prisma/client';

@ApiTags('appointment')
@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  getAll(): Promise<any> {
    return this.appointmentService.getAll();
  }

  @Get(':appointmentId')
  getById(@Param('appointmentId') appointmentId: string): Promise<any> {
    return this.appointmentService.appointmentDetails(appointmentId);
  }

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto): Promise<any> {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Patch(':appointmentId')
  update(
    @Param('appointmentId') appointmentId: string,
    @Query('status') status: Status,
  ): Promise<any> {
    return this.appointmentService.updateStatus(appointmentId, status);
  }
}
