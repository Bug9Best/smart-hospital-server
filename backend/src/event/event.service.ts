import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { StaffService } from 'src/staff/staff.service';
import { Event as EventModel } from '@prisma/client';

@Injectable()
export class EventService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly staffService: StaffService,
  ) { }

  async findAll(): Promise<EventModel[]> {
    const events = await this.prisma.event.findMany();
    return events;
  }

  async findById(eventId: number): Promise<any> {
    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      throw new HttpException('Event not found', HttpStatus.BAD_REQUEST);
    }

    return event;
  }

  async create(data: CreateEventDto): Promise<void> {
    const isStaffExist = await this.staffService.findById(data.creatorId);

    if (!isStaffExist) {
      throw new HttpException('Staff not found', HttpStatus.BAD_REQUEST);
    }

    const IsTitleExist = await this.prisma.event.findUnique({
      where: { title: data.title },
    });

    if (IsTitleExist) {
      throw new HttpException('Title already exist', HttpStatus.BAD_REQUEST);
    }

    await this.prisma.event.create({
      data,
    });
  }

  async deleteEvent(id: string): Promise<void> {
    const isExist = await this.findById(parseInt(id));
    if (!isExist) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'ไม่พบข้อมูลที่ต้องการ',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    await this.prisma.event.delete({
      where: { id: parseInt(id.toString()) },
    });
  }
}
