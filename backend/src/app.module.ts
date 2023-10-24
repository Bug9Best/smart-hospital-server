import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppointModule } from './appoint/appoint.module';
import { QueueModule } from './queue/queue.module';
import { RecordModule } from './record/record.module';
import { ScheduleModule } from './schedule/schedule.module';
import { NotificationModule } from './notification/notification.module';
import { DrugModule } from './drug/drug.module';
import { StaffModule } from './staff/staff.module';
import { ProfileModule } from './profile/profile.module';
import { EventService } from './event/event.service';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    AuthModule,
    EventModule,
    ProfileModule,
    StaffModule,
    DrugModule,
    NotificationModule,
    ScheduleModule,
    RecordModule,
    QueueModule,
    AppointModule
  ],
  controllers: [AppController],
  providers: [AppService, EventService],
})
export class AppModule { }
