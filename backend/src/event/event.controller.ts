import { Controller, Param, Get, Delete } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { Body, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('event')
@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.eventService.findAll();
  }

  @Get(':eventId')
  async GetById(@Param('eventId') id: number): Promise<any> {
    return await this.eventService.findById(id);
  }

  @Post()
  async create(@Body() data: CreateEventDto): Promise<void> {
    await this.eventService.create(data);
  }

  @Delete(':eventId')
  delete(@Param('eventId') eventId: string): Promise<void> {
    return this.eventService.deleteEvent(eventId);
  }
}
