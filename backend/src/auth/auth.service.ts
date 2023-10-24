import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { StaffService } from 'src/staff/staff.service';
import { UsersService } from 'src/users/users.service';
import { RegisterUserDto } from './dto/create-user-dto';
import * as bcrypt from 'bcrypt';
import { Staff as StaffModel, User as UserModel } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly staffService: StaffService,
  ) {}

  async loginUser(
    citizenId: string,
    password: string,
  ): Promise<Omit<UserModel, 'password'>> {
    const user = await this.userService.findByCitizenId(citizenId);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
    }

    delete user.password;

    return user;
  }

  async loginStaff(
    username: string,
    password: string,
  ): Promise<Omit<StaffModel, 'password'>> {
    const staff = await this.staffService.findByUsername(username);

    if (!staff) {
      throw new HttpException('Staff not found', HttpStatus.NOT_FOUND);
    }

    const isPasswordMatch = await bcrypt.compare(password, staff.password);

    if (!isPasswordMatch) {
      throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
    }

    delete staff.password;

    return staff;
  }

  async registerUser(data: RegisterUserDto): Promise<void> {
    const { password, ...userData } = data;

    const hashPassword = await bcrypt.hash(password, 10);

    await this.userService.createUser({
      password: hashPassword,
      ...userData,
    });
  }
}
