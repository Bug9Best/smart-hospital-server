import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PrimeNGModule } from 'src/app/modules/primeng.module';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    PrimeNGModule
  ]
})
export class PageHeaderComponent {

  @Input() title: string = '';
  @Input() label: string = '';
  @Output() onClickButton = new EventEmitter();

  onClick() {
    this.onClickButton.emit();
  }
}
