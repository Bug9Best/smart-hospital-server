import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopBarComponent } from './topbar/topbar.component';
import { AppFooterComponent } from './footer/footer.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppMenuitemComponent } from './munuItem/menuitem.component';
import { AppSidebarComponent } from './sidebar/sidebar.component';
import { AppLayoutComponent } from './layout.component';
import { AppConfigModule } from './config/config.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PrimeNGModule } from '../modules/primeng.module';



@NgModule({
  declarations: [
    AppTopBarComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppSidebarComponent,
    AppLayoutComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    PrimeNGModule,
    RouterModule,
    AppConfigModule
  ]
})
export class AppLayoutModule { }
