import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DrugService {
  constructor(private readonly prisma: PrismaService) {}

  async findByDrugName(drugName: string): Promise<any> {
    return await this.prisma.drugDisplay.findMany({
      where: {
        name: drugName,
      },
    });
  }

  async findByDrugId(drugId: number): Promise<any> {
    return await this.prisma.drugDisplay.findUnique({
      where: {
        id: drugId,
      },
    });
  }

  async getAll(): Promise<any> {
    return await this.prisma.drugDisplay.findMany();
  }

  async findDetail(drugId: number): Promise<any> {
    const isDrugExist = await this.findByDrugId(drugId);

    if (!isDrugExist) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'ไม่พบข้อมูลยา',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return await this.prisma.drugDisplay.findUnique({
      where: {
        id: drugId,
      },
    });
  }

  async create(data: CreateDrugDto): Promise<void> {
    const isDrugExist = await this.findByDrugName(data.name);

    if (isDrugExist) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'มีชื่อยานี้อยู่แล้ว',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.prisma.drugDisplay.create({
      data,
    });
  }

  async update(id: number, data: UpdateDrugDto): Promise<void> {
    const isDrugExist = await this.findByDrugId(id);

    if (!isDrugExist) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'ไม่พบข้อมูลยา',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    await this.prisma.drugDisplay.update({
      where: { id: id },
      data: data,
    });
  }

  async delete(id: number): Promise<void> {
    const isDrugExist = await this.findByDrugId(id);

    if (!isDrugExist) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'ไม่พบข้อมูลยา',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    await this.prisma.drugDisplay.delete({
      where: { id: id },
    });
  }
}
