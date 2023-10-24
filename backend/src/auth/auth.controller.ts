import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/create-user-dto';
import { ApiTags } from '@nestjs/swagger';
import { LoginStaffDto, LoginUserDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register/user')
  async login(@Body() data: RegisterUserDto): Promise<any> {
    await this.authService.registerUser(data);
  }

  @Post('login/user')
  async loginUser(@Body() data: LoginUserDto): Promise<any> {
    return await this.authService.loginUser(data.citizenId, data.password);
  }

  @Post('login/staff')
  async loginStaff(@Body() data: LoginStaffDto): Promise<any> {
    return await this.authService.loginStaff(data.username, data.password);
  }
}
