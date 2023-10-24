import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { StaffService } from 'src/app/services/staff/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent {

  listUser: any = [];
  selectedUser: any = {}
  visibleCreateUser: boolean = false;
  visibleEditUser: boolean = false;

  formData: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    role: new FormControl("STAFF", [Validators.required]),
  });

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private staffService: StaffService
  ) {
  }

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff() {
    this.staffService.getAll().subscribe((res: any) => {
      this.listUser = res;
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
    this.visibleCreateUser = true;
  }

  openEdit(value: any) {
    this.visibleEditUser = true;
    this.selectedUser = value;
  }

  resetForm() {
    this.formData.reset();
    this.visibleCreateUser = false;
  }

  createUser() {
    let data = this.formData.value;
    this.staffService.create(data).subscribe((res: any) => {
      this.showDialog('success', 'สำเร็จ!', 'เพิ่มผู้ใช้งานสำเร็จ');
      this.resetForm();
      this.getStaff();
    });
  }

  updateStaff() {
    let data = this.selectedUser;
    this.confirmationService.confirm({
      header: 'ยืนยันการแก้ไขผู้ใช้งาน',
      icon: 'pi pi-exclamation-triangle',
      message: 'คุณต้องการที่จะแก้ไขผู้ใช้งาน ใช่หรือไม่?',
      acceptLabel: 'ยืนยัน',
      rejectLabel: 'ยกเลิก',
      accept: () => {
        this.staffService.update(data).subscribe((res: any) => {
          this.showDialog('success', 'สำเร็จ!', 'แก้ไขผู้ใช้งานสำเร็จ');
          this.visibleEditUser = false;
          this.getStaff();
        });
      }
    });

  }

  deleteItem(value: any) {
    this.confirmationService.confirm({
      header: 'ยืนยันการลบผู้ใช้งาน',
      icon: 'pi pi-exclamation-triangle',
      message: 'คุณต้องการที่จะลบผู้ใช้งาน ใช่หรือไม่?',
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
