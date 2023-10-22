import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { PrimeNGModule } from 'src/app/modules/primeng.module';
import { ThaiModule } from 'src/app/modules/thai.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
];

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PrimeNGModule,
    ThaiModule
  ]
})
export class NewsModule { }
