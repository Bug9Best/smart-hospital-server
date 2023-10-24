import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {

  listDoctor: any = [1];
  visibleCreateDortor: boolean = false;

  formData: FormGroup = new FormGroup({
    prefix: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    position: new FormControl(null, [Validators.required]),
    url: new FormControl(null, [Validators.required]),
    branch: new FormControl(null, [Validators.required]),
  });

  constructor(
    private messageService: MessageService,
  ) {
  }

  showDialog(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail
    });
  }

  openCreate() {
    this.visibleCreateDortor = true;
  }

  onUpload(event: any) {
    console.log(event);
  }

  resetForm() {
    this.formData.reset();
    this.visibleCreateDortor = false;
  }

  createDoctor() {
    let data = this.formData;
  }

}
