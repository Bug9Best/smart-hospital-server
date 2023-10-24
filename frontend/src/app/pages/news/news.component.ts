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
  showValidation: boolean = false;
  listNews: any = [];

  formData: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
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
    this.newsService
      .getAll()
      .subscribe({
        next: (response) => {
          console.log(response);
        }
      });
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

  createNews() {
    let data = this.formData;
    if (data.invalid) {
      this.showValidation = true;
      return;
    }

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
