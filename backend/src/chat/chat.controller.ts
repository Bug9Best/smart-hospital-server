import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('chat')
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('/:userId')
  async getMessage(@Param('userId') userId: string) {
    return this.chatService.getMessage(userId);
  }

  @Post('/send')
  async createMessage(@Body() createDto: CreateChatDto) {
    return this.chatService.createMessage(createDto);
  }
}
