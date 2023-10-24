import { Body, Controller, Post, Get } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Get()
  getAll(): Promise<any> {
    return this.staffService.findAll();
  }

  @Get(':staffId')
  getById(staffId: string): Promise<any> {
    return this.staffService.findById(staffId);
  }

  @Post()
  create(@Body() createStaffDto: CreateStaffDto): Promise<void> {
    return this.staffService.createStaff(createStaffDto);
  }
}
