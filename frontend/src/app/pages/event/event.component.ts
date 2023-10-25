import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EventService } from 'src/app/services/event/event.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-news',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  currentUser: any = {};
  selectedEvent: any = {};
  listEvent: any = [];
  visibleCreateEvent: boolean = false;
  visibleDetailEvent: boolean = false;

  formData: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    img: new FormControl(null, [Validators.required]),
    creatorId: new FormControl(null, [Validators.required]),
  });

  constructor(
    private eventService: EventService,
    private messageService: MessageService,
    private storage: AngularFireStorage,
  ) {
  }

  ngOnInit(): void {
    this.getEvent();
    this.currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (this.currentUser) {
      this.formData.controls['creatorId'].setValue(this.currentUser.staffId);
    }
  }


  getEvent() {
    this.eventService
      .getAll()
      .subscribe({
        next: (response) => {
          this.listEvent = response;
        }
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
    this.visibleCreateEvent = true;
  }

  openDetail(event: any) {
    this.visibleDetailEvent = true;
    this.selectedEvent = event;
  }

  resetForm() {
    this.formData.reset();
  }

  onUpload(event: any) {
    const file = event.files[0];
    if (file) {
      this.storage.upload('/event/' + file.name, file).then(() => {
        this.storage.ref('/event/' + file.name).getDownloadURL().subscribe((url) => {
          this.formData.controls['img'].setValue(url);
        });
      });
    }
  }

  createEvent() {
    let data = this.formData;
    this.eventService
      .create(data.value)
      .subscribe({
        next: () => {
          this.showDialog('success', 'สำเร็จ', 'เพิ่มข่าวสารสำเร็จ');
          this.visibleCreateEvent = false;
          this.getEvent();
        },
        error: (error) => {
          this.showDialog('error', 'ไม่สำเร็จ', error.error.message);
        },
      });
  }
}
