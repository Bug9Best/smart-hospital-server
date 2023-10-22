import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Get()
  getHello(): string {
    return "Best";
  }

  @Get("/:id")
  getHelloById(id: string): string {
    return "Test";
  }

  @Post("/hello")
  getBody(@Body() body: any): string {
    return this.authService.getUser();
  }
}
