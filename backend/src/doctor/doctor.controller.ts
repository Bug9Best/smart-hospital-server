import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@ApiTags('doctor')
@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  getAll(): Promise<any> {
    return this.doctorService.getAll();
  }

  @Post('')
  create(@Body() createDoctorDto: CreateDoctorDto): Promise<void> {
    return this.doctorService.createDoctor(createDoctorDto);
  }

  @Put(':doctorId')
  update(
    @Param('doctorId') doctorId: string,
    @Body() createDoctorDto: UpdateDoctorDto,
  ): Promise<void> {
    return this.doctorService.updateDoctor(doctorId, createDoctorDto);
  }

  @Delete(':doctorId')
  delete(@Param('doctorId') doctorId: string): Promise<void> {
    return this.doctorService.deleteDoctor(doctorId);
  }
}
