import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThaiDatePipe } from './thdate.pipe';
import { ThaiCalendarDirective } from './thai-calendar.directive';

@NgModule({
  declarations: [
    ThaiDatePipe,
    ThaiCalendarDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThaiDatePipe,
    ThaiCalendarDirective
  ]
})
export class ThaiModule { }