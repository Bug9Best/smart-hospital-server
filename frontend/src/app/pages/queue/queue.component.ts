import { Component, OnInit } from '@angular/core';
import * as e from 'express';
import { ConfirmationService } from 'primeng/api';
import { QueueService } from 'src/app/services/queue/queue.service';

export enum Queue {
  WAITING = 'WAITING',
  CANCEL = 'CANCEL',
  DONE = 'DONE',
}

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
  queueStatus = Queue;
  listQueue: any[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    private queueService: QueueService
  ) { }

  ngOnInit(): void {
    this.getQueue();
  }

  getQueue() {
    this.queueService.getAll().subscribe((res: any) => {
      this.listQueue = res.filter((item: any) => item.status == "WAITING");
    })
  }

  nextQueue() {
    this.confirmationService.confirm({
      message: 'คุณต้องการที่จะไปยังคิวถัดไปหรือไม่?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.queueService.update(this.listQueue[0].id, { status: this.queueStatus.DONE }).subscribe((res: any) => {
          this.getQueue();
        })
      }
    });

  }
}
