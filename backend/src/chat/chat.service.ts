import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { Server } from 'socket.io';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@Injectable()
@WebSocketGateway()
export class ChatService {
  constructor(private readonly prismaService: PrismaService) {}

  @WebSocketServer()
  private readonly server: Server;

  public async getMessage(userId?: string) {
    const con = await this.prismaService.conversations.findMany({
      where: {
        OR: [{ userId1: userId }, { userId2: userId }],
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    if (con.length === 0) {
      return {
        message: 'No conversation',
      };
    }

    const message = await Promise.all(
      con.map(async (item) => {
        const message = await this.prismaService.message.findMany({
          where: {
            OR: [{ senderId: userId }, { receiverId: userId }],
          },
          select: {
            content: true,
            senderId: true,
            receiverId: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: 'asc',
          },
        });

        return {
          conversationId: item.id,
          message,
        };
      }),
    );

    if (message.length === 0)
      return {
        message: 'No message',
      };

    return message;
  }

  public async createMessage(conDto: CreateChatDto) {
    let newCon;

    const checkCon = await this.prismaService.conversations.findFirst({
      where: {
        OR: [
          { userId1: conDto.receiverId, userId2: conDto.senderId },
          { userId1: conDto.senderId, userId2: conDto.receiverId },
        ],
      },
    });

    if (!checkCon) {
      newCon = await this.prismaService.conversations.create({
        data: {
          userId1: conDto.receiverId,
          userId2: conDto.senderId,
        },
      });
    }

    // // Create new message
    const newMessage = await this.prismaService.message.create({
      data: {
        content: conDto.content,
        conversationId: checkCon ? checkCon.id : newCon.id,
        receiverId: conDto.receiverId,
        senderId: conDto.senderId,
      },
    });

    this.server.emit('onMessage', {
      message: 'Create message successfully',
      newMessage,
    });

    return {
      message: 'Create message successfully',
      newMessage,
    };
  }
}
