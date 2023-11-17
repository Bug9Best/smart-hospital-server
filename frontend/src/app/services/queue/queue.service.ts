import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class QueueService extends BaseService {
  public override path: string = "queue";

  updateQueue(id: number, status: any) {
    return this.http.patch(`${this.getBaseUrl}/${id}?status=${status}`, {});
  }

}
