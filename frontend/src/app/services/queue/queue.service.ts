import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class QueueService extends BaseService {
  public override path: string = "queue";

}
