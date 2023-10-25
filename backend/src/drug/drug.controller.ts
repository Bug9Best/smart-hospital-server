import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DrugService } from './drug.service';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('drug')
@Controller('drug')
export class DrugController {
  constructor(private readonly drugService: DrugService) {}

  @Get()
  getAll() {
    return this.drugService.getAll();
  }

  @Get(':drugId')
  getById(@Param('drugId') drugId: number) {
    return this.drugService.findByDrugId(Number(drugId));
  }

  @Post()
  create(@Body() createDrugDto: CreateDrugDto) {
    return this.drugService.create(createDrugDto);
  }

  @Patch(':drugId')
  update(
    @Param('drugId') drugId: number,
    @Body() updateDrugDto: UpdateDrugDto,
  ) {
    return this.drugService.update(Number(drugId), updateDrugDto);
  }

  @Delete(':drugId')
  remove(@Param('drugId') drugId: number) {
    return this.drugService.delete(Number(drugId));
  }
}
