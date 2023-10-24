import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DrugService } from 'src/app/services/drug/drug.service';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss']
})
export class DrugComponent implements OnInit {

  listDrug: any = [];
  selectedDrug: any = {}

  visibleCreateDrug: boolean = false;
  visibleEditDrug: boolean = false;

  formData: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private drugService: DrugService
  ) { }

  ngOnInit(): void {
    this.getDrug();
  }

  getDrug() {

  }

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
    this.visibleCreateDrug = false;
  }

  openEdit(value: any) {
    this.visibleEditDrug = true;
    this.selectedDrug = value;
  }

  onUpload(event: any) {
    console.log(event);
  }

  createDrug() {
    let data = this.formData;
    this.drugService.create(data).subscribe(() => {
      this.showDialog('success', 'สำเร็จ!', 'เพิ่มข้อมูลยาสำเร็จ');
      this.resetForm();
      this.getDrug();
    });
  }

  updateDrug() {
    this.confirmationService.confirm({
      header: 'ยืนยันการแก้ไขข้อมูลยา',
      icon: 'pi pi-exclamation-triangle',
      message: 'คุณต้องการที่จะแก้ไขข้อมูลยา ใช่หรือไม่?',
      acceptLabel: 'ยืนยัน',
      rejectLabel: 'ยกเลิก',
      accept: () => {
        // this.staffService.delete(value.id).subscribe((res: any) => {
        //   this.showDialog('success', 'สำเร็จ!', 'ลบผู้ใช้งานสำเร็จ');
        //   this.getStaff();
        // });
      }
    });
  }

  deleteItem(drug: any) {
    this.confirmationService.confirm({
      header: 'ยืนยันการลบข้อมูลยา',
      icon: 'pi pi-exclamation-triangle',
      message: 'คุณต้องการที่จะลบข้อมูลยา ใช่หรือไม่?',
      acceptLabel: 'ยืนยัน',
      rejectLabel: 'ยกเลิก',
      accept: () => {
        // this.staffService.delete(value.id).subscribe((res: any) => {
        //   this.showDialog('success', 'สำเร็จ!', 'ลบผู้ใช้งานสำเร็จ');
        //   this.getStaff();
        // });
      }
    });
  }


}
