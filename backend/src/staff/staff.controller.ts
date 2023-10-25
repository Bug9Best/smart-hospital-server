import { Body, Controller, Post, Get, Param, Patch, Put, Delete } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateStaffDto } from './dto/update-staff.dto';

@ApiTags('staff')
@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) { }

  @Get()
  getAll(): Promise<any> {
    return this.staffService.findAll();
  }

  @Get(':staffId')
  getById(@Param('staffId') staffId: string): Promise<any> {
    return this.staffService.findById(staffId);
  }

  @Post()
  create(@Body() createStaffDto: CreateStaffDto): Promise<void> {
    return this.staffService.createStaff(createStaffDto);
  }

  @Put(':staffId')
  update(
    @Param('staffId') staffId: string,
    @Body() createDoctorDto: UpdateStaffDto,
  ): Promise<void> {
    return this.staffService.updateStaff(staffId, createDoctorDto);
  }

  @Delete(':staffId')
  delete(@Param('staffId') staffId: string): Promise<void> {
    return this.staffService.deleteStaff(staffId);
  }
}
