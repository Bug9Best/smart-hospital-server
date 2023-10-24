import { Controller } from '@nestjs/common';
import { AppointService } from './appoint.service';

@Controller('appoint')
export class AppointController {
  constructor(private readonly appointService: AppointService) {}
}
