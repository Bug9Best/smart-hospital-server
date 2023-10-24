import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { DrugService } from './drug.service';

@Controller('drug')
export class DrugController {
  constructor(
    private readonly drugService: DrugService
  ) { }

  @Get()
  GetAll(): string {
    return "Get Drug";
  }

  @Get("/:id")
  GetByID(id: string): string {
    return "Get Drug by id";
  }

  @Post("/")
  PostDrug(@Body() body: any): string {
    return "Post Drug";
    // return this.DdrugService.getUser();
  }

  @Put("/:id")
  PutDrug(@Body() body: any, id: string): string {
    return "Put Drug";
  }

  @Delete("/:id")
  DeleteDrug(id: string): string {
    return "Delete Drug";
  }
}
