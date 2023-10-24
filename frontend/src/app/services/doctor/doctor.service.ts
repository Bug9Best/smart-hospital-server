import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService extends BaseService {
  public override path: string = "doctor";

}
