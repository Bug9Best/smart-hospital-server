import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NoDatalistComponent } from 'src/app/component/no-datalist/no-datalist.component';
import { PageHeaderComponent } from 'src/app/component/page-header/page-header.component';
import { PrimeNGModule } from 'src/app/modules/primeng.module';
import { ThaiModule } from 'src/app/modules/thai.module';
import { ReserveComponent } from './reserve.component';

const routes: Routes = [
  {
    path: '',
    component: ReserveComponent,
  },
];

@NgModule({
  declarations: [
    ReserveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    ThaiModule,
    PageHeaderComponent,
    NoDatalistComponent
  ]
})
export class ReserveModule { }
