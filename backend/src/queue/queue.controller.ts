import { Controller, Post, Get, Body } from '@nestjs/common';
import { QueueService } from './queue.service';
import { CreateQueueDto } from './dto/create-queue.dto';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Get()
  getAll(): Promise<any> {
    return this.queueService.findAll();
  }

  @Post()
  create(@Body() data: CreateQueueDto): Promise<void> {
    return this.queueService.createQueue(data);
  }
}
