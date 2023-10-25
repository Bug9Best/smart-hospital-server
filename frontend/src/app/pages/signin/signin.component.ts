import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StaffRole } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  formData: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService
  ) { }

  signin() {
    let values = this.formData.value;
    this.authService.loginStaff(values).subscribe({
      next: (response: any) => {
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/profile']);
      },
      error: (error: any) => {
        this.messageService.add({
          key: 'app',
          severity: 'error',
          summary: 'Error',
          detail: error.error.message
        });
      }
    });
  }
}
