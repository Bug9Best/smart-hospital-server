import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<any> {
    return this.usersService.getAll();
  }

  @Get(':userId')
  getUserDetails(@Param('userId') userId: string): Promise<any> {
    return this.usersService.getUserDetails(userId);
  }

  @Get(':userId/appointments')
  getAppointmentsByUserId(@Param('userId') userId: string): Promise<any> {
    return this.usersService.getAppointmentsByUserId(userId);
  }

  @Get(':userId/queues')
  getQueuesByUserId(@Param('userId') userId: string): Promise<any> {
    return this.usersService.getQueuesByUserId(userId);
  }

  @Patch(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body() update: UpdateUserDto,
  ): Promise<any> {
    return this.usersService.updateUser(userId, update);
  }
}
