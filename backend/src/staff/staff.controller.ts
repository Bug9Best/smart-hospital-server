import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('staff')
@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

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
}
