import { Controller, Param, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { Body, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('event')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get(':id')
  async getDetail(@Param('id') id: number): Promise<any> {
    return await this.eventService.getDetail(id);
  }

  @Post()
  async create(@Body() data: CreateEventDto): Promise<void> {
    await this.eventService.create(data);
  }
}
