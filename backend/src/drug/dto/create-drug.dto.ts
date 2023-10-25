import { IsOptional, IsString } from 'class-validator';

export class CreateDrugDto {
  @IsString()
  name: string;

  @IsString()
  drugGroup: string;

  @IsString()
  dosage: string;

  @IsString()
  @IsOptional()
  description?: string | null;

  @IsString()
  @IsOptional()
  img?: string | null;
}
