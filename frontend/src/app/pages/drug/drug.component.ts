import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss']
})
export class DrugComponent {

  visibleCreateDrug: boolean = false;

  formData: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    img: new FormControl(null, [Validators.required]),
    creatorId: new FormControl(null, [Validators.required]),
  });

  constructor(
    private messageService: MessageService
  ) { }

  showDialog(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail
    });
  }

  openCreate() {
    this.visibleCreateDrug = true;
  }

  resetForm() {
    this.formData.reset();
  }

  onUpload(event: any) {
    console.log(event);
  }

  createDrug() {
    let data = this.formData;
  }
}
