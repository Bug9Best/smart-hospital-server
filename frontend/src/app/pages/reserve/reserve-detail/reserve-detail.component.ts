import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';


export enum Appointment {
  WAITING = 'WAITING',
  CANCEL = 'CANCEL',
  DONE = 'DONE',
}

@Component({
  selector: 'app-reserve-detail',
  templateUrl: './reserve-detail.component.html',
  styleUrls: ['./reserve-detail.component.scss']
})
export class ReserveDetailComponent implements OnInit {
  appointmentStatus = Appointment;
  appointmentId: string = '';
  appointment: any = {};
  items: MenuItem[] = [
    { label: 'นัดหมายออนไลน์', routerLink: '/reserve' },
    { label: 'รายละเอียดการนัดหมาย' }
  ];

  constructor(
    private confirmationService: ConfirmationService,
    private activatedRoute: ActivatedRoute,
    private appontmentService: AppointmentService
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.appointmentId = params.get('id')!;
      }
    })
  }

  ngOnInit(): void {
    this.getAppontmentDetail();
  }

  getAppontmentDetail() {
    this.appontmentService
      .getOne(this.appointmentId)
      .subscribe((res: any) => {
        this.appointment = res;
        console.log(res);
      });
  }

  getSeverity(status: any): string {
    if (status == 'WAITING') {
      return 'info';
    }
    else if (status == 'DONE') {
      return 'success';
    }
    else {
      return 'danger';
    }
  }

  getValue(status: any) {
    if (status === 'WAITING') {
      return 'รอการนัดหมาย';
    }
    else if (status === 'DONE') {
      return 'เสร็จสิ้น';
    }
    else {
      return 'ยกเลิกการนัดหมาย';
    }
  }

  changeStatus(status: string) {
    this.confirmationService.confirm({
      message: 'ยืนยันการเปลี่ยนสถานะการนัดหมาย',
      accept: () => {
        this.appontmentService
          .updateAppointment(this.appointmentId, status)
          .subscribe((res: any) => {
            this.getAppontmentDetail();
          });
      }
    });
  }
}
