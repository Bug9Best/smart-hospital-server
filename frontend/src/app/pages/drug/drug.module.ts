import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugComponent } from './drug.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from 'src/app/component/page-header/page-header.component';
import { PrimeNGModule } from 'src/app/modules/primeng.module';
import { ThaiModule } from 'src/app/modules/thai.module';


const routes: Routes = [
  {
    path: '',
    component: DrugComponent,
  },
];

@NgModule({
  declarations: [
    DrugComponent
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
export class DrugModule { }
