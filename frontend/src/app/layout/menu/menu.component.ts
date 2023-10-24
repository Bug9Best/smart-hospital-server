import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'เมนูหลัก',
                style: 'font-size: 20px',
                items: [
                    {
                        label: 'ผู้ใช้งาน',
                        icon: 'pi pi-user',
                        routerLink: ['/user']
                    },
                    {
                        label: 'แพทย์',
                        icon: 'pi pi-users',
                        routerLink: ['/doctor']
                    },
                    {
                        label: 'บุคคลากร',
                        icon: 'pi pi-users',
                        routerLink: ['/staff']
                    },
                    {
                        label: 'ข้อมูลยา',
                        icon: 'pi pi-info-circle',
                        routerLink: ['/drug']
                    },
                    {
                        label: 'ข่าวสาร/ประชาสัมพันธ์',
                        icon: 'pi pi-fw pi-copy',
                        routerLink: ['/event']
                    },
                    {
                        label: 'ข้อมูลส่วนตัว',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/profile']
                    },
                ]
            },
        ];
    }
}
