import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { PrimeNGModule } from 'src/app/modules/primeng.module';
import { ThaiModule } from 'src/app/modules/thai.module';
import { RouterModule, Routes } from '@angular/router';
import { PageHeaderComponent } from 'src/app/component/page-header/page-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EventComponent,
  },
];

@NgModule({
  declarations: [
    EventComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    ThaiModule,
    PageHeaderComponent
  ]
})
export class EventModule { }
