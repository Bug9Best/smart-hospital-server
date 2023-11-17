import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  listAppointment: any[] = [];

  constructor(
    private router: Router,
    private appontmentService: AppointmentService
  ) { }

  ngOnInit(): void {
    this.getAppontment();
  }

  getAppontment() {
    this.appontmentService.getAll().subscribe((res: any) => {
      this.listAppointment = res;
    });
  }

  viewDetail(item: any) {
    this.router.navigate(['/reserve/detail', item.id]);
  }
}
