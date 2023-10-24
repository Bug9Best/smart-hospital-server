import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService extends BaseService {
  public override path: string = "staff";
}
