import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends BaseService {
  public override path: string = "appointment";

  updateAppointment(id: number, status: any) {
    return this.http.patch(`${this.getBaseUrl}/${id}?status=${status}`, {});
  }


}
