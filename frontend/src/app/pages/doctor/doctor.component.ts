import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  selectedDoctor: any = {};
  listDoctor: any = [];
  visibleEditDoctor: boolean = false;
  visibleCreateDortor: boolean = false;
  listBranch: any = [
    { label: '-- กรุณาเลือก --' },
    { id: 1, label: 'แพทย์ศัลยกรรมกระดูก', value: 'ORTHOPEDICS' },
    { id: 2, label: 'แพทย์จิตเวช', value: 'PSYCHIATRIST' },
    { id: 3, label: 'แพทย์ทันตแพทย์', value: 'DENTIST' },
    { id: 4, label: 'แพทย์ประสาทวิทยา', value: 'NEUROLOGIST' },
    { id: 5, label: 'แพทย์อายุรกรรม', value: 'INTERNAL_MEDICINE' },
    { id: 6, label: 'แพทย์กุมารเวช', value: 'PEDIATRICS' },
  ];

  formData: FormGroup = new FormGroup({
    prefix: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    position: new FormControl(null, [Validators.required]),
    img: new FormControl(null, [Validators.required]),
    branch: new FormControl(null, [Validators.required]),
  });

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private doctorService: DoctorService,
    private storage: AngularFireStorage,
  ) {
  }

  ngOnInit(): void {
    this.getDoctor();
  }

  getDoctor() {
    this.doctorService
      .getAll()
      .subscribe((res) => {
        this.listDoctor = res
      });
  }

  showDialog(severity: string, summary: string, detail: string) {
    this.messageService.add({
      key: 'app',
      severity: severity,
      summary: summary,
      detail: detail
    });
  }

  openCreate() {
    this.visibleCreateDortor = true;
  }

  openDetail(event: any) {
    this.visibleEditDoctor = true;
    this.selectedDoctor = event;
  }

  onUpload(event: any) {
    const file = event.files[0];
    if (file) {
      this.storage.upload('/doctor/' + file.name, file).then(() => {
        this.storage.ref('/doctor/' + file.name).getDownloadURL().subscribe((url) => {
          this.formData.controls['img'].setValue(url);
          this.selectedDoctor.img = url;
        });
      });
    }
  }

  resetForm() {
    this.formData.reset();
    this.visibleCreateDortor = false;
  }

  createDoctor() {
    let data = this.formData.value;
    this.doctorService
      .create(data)
      .subscribe({
        next: (res) => {
          this.showDialog('success', 'สำเร็จ', 'เพิ่มข้อมูลเรียบร้อย');
          this.getDoctor();
          this.resetForm();
        },
        error: (err) => {
          this.showDialog('error', 'ไม่สำเร็จ', err.error.error);
        }
      });
  }

  updateDoctor() {
    this.doctorService
      .update(this.selectedDoctor.id, this.selectedDoctor)
      .subscribe({
        next: (res) => {
          this.showDialog('success', 'สำเร็จ', 'แก้ไขข้อมูลเรียบร้อย');
          this.visibleEditDoctor = false;
          this.getDoctor();
        },
        error: (err) => {
          this.showDialog('error', 'ไม่สำเร็จ', err.error.error);
        }
      });

  }

  deleteDoctor(doctor: any) {
    this.confirmationService.confirm({
      header: 'ยืนยันการลบแพทย์/บุคลากร',
      icon: 'pi pi-exclamation-triangle',
      message: 'คุณต้องการลบแพทย์/บุคลากร นี้ใช่หรือไม่',
      acceptLabel: 'ยืนยัน',
      rejectLabel: 'ยกเลิก',
      accept: () => {
        this.doctorService
          .delete(doctor.id)
          .subscribe({
            next: (res) => {
              this.showDialog('success', 'สำเร็จ', 'ลบข้อมูลเรียบร้อย');
              this.getDoctor();
            },
            error: (err) => {
              this.showDialog('error', 'ไม่สำเร็จ', err.error.error);
            }
          });
      },
    });
  }
}
