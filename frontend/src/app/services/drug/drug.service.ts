import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class DrugService extends BaseService {
  public override path: string = "drug";

}
