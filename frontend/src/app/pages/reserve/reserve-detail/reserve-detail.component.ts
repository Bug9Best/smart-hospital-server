import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-reserve-detail',
  templateUrl: './reserve-detail.component.html',
  styleUrls: ['./reserve-detail.component.scss']
})
export class ReserveDetailComponent implements OnInit {

  appointmentId: string = '';
  appointment: any = {};
  items: MenuItem[] = [
    { label: 'นัดหมายออนไลน์', routerLink: '/reserve' },
    { label: 'รายละเอียดการนัดหมาย' }
  ];

  constructor(
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

  changeStatus(status: string) {
    this.appontmentService
      .update(this.appointmentId, { status: status })
      .subscribe((res: any) => {
        this.getAppontmentDetail();
      });

  }
}
