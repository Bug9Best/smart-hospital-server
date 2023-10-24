import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  visibleCreateNews: boolean = false;
  listNews: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  formData: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    img: new FormControl(null, [Validators.required]),
    creatorId: new FormControl(null, [Validators.required]),
  });

  constructor(
    private newsService: NewsService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getNews();
  }


  getNews() {
    // this.newsService
    //   .getAll()
    //   .subscribe({
    //     next: (response) => {
    //       console.log(response);
    //     }
    //   });
  }

  showDialog(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail
    });
  }

  openCreate() {
    this.visibleCreateNews = true;
  }

  resetForm() {
    this.formData.reset();
  }

  onUpload(event: any) {
    console.log(event);
  }

  createNews() {
    let data = this.formData;
    // this.newsService
    //   .create(data.value)
    //   .subscribe({
    //     next: () => {
    //       this.showDialog('success', 'สำเร็จ', 'เพิ่มข่าวสารสำเร็จ');
    //     },
    //     error: (error) => {
    //       this.showDialog('error', 'ไม่สำเร็จ', error.error.message);
    //     },
    //   });
  }
}
