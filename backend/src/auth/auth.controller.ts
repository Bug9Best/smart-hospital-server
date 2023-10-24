import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @Get()
  GetAll(): string {
    return "Get Auth";
  }

  @Get("/:id")
  GetByID(id: string): string {
    return "Get Auth by id";
  }

  @Post("/")
  PostAuth(@Body() body: any): string {
    return "Post Auth";
    // return this.authService.getUser();
  }

  @Put("/:id")
  PutAuth(@Body() body: any, id: string): string {
    return "Put Auth";
  }

  @Delete("/:id")
  DeleteAuth(id: string): string {
    return "Delete Auth";
  }
}