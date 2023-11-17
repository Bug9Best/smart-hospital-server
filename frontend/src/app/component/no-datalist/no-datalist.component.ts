import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PrimeNGModule } from 'src/app/modules/primeng.module';

@Component({
  selector: 'no-datalist',
  templateUrl: './no-datalist.component.html',
  styleUrls: ['./no-datalist.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PrimeNGModule
  ]
})
export class NoDatalistComponent {

  @Input() message: string = '';
  @Input() buttonLabel: string= '';
  @Input() showButton: boolean = true;

}
