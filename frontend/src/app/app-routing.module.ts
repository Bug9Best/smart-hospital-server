import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AppLayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: 'staff', pathMatch: 'full' },
      {
        path: 'reserve',
        loadChildren: () => import('./pages/reserve/reserve.module').then(m => m.ReserveModule)
      },
      {
        path: 'queue',
        loadChildren: () => import('./pages/queue/queue.module').then(m => m.QueueModule)
      },
      {
        path: 'event',
        loadChildren: () => import('./pages/event/event.module').then(m => m.EventModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: 'doctor',
        loadChildren: () => import('./pages/doctor/doctor.module').then(m => m.DoctorModule)
      },
      {
        path: 'staff',
        loadChildren: () => import('./pages/staff/staff.module').then(m => m.StaffModule)
      },
      {
        path: 'drug',
        loadChildren: () => import('./pages/drug/drug.module').then(m => m.DrugModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
      },
    ]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  { path: '**', redirectTo: 'signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
