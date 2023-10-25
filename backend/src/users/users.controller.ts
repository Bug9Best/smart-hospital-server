import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<any> {
    return this.usersService.getAll();
  }

  @Get(':userId')
  getUserDetails(userId: string): Promise<any> {
    return this.usersService.getUserDetails(userId);
  }

  @Get(':userId/appointments')
  getAppointmentsByUserId(userId: string): Promise<any> {
    return this.usersService.getAppointmentsByUserId(userId);
  }

  @Get(':userId/queues')
  getQueuesByUserId(userId: string): Promise<any> {
    return this.usersService.getQueuesByUserId(userId);
  }
}
