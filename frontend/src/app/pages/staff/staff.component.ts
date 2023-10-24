import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {

  visibleCreateStaff: boolean = false;

  formData: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    img: new FormControl(null, [Validators.required]),
    creatorId: new FormControl(null, [Validators.required]),
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
    this.visibleCreateStaff = true;
  }

  resetForm() {
    this.formData.reset();
  }

  createStaff() {
    let data = this.formData;
  }
}
