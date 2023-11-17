import {
  Controller,
  Post,
  Get,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { QueueService } from './queue.service';
import { CreateQueueDto } from './dto/create-queue.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('queue')
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

  @Patch(':queueId')
  update(
    @Param('queueId') queueId: number,
    @Query('status') status: string,
  ): Promise<any> {
    return this.queueService.updateStatus(queueId, status);
  }
}
