import { Body, Controller, Post } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('doctor')
@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post('add')
  create(@Body() createDoctorDto: CreateDoctorDto): Promise<void> {
    return this.doctorService.createDoctor(createDoctorDto);
  }
}
