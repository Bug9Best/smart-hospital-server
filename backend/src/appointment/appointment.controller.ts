import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { ApiTags } from '@nestjs/swagger';

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
}
