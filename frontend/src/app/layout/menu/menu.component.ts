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
                        label: 'จองออนไลน์รับบริการ',
                        icon: 'pi pi-calendar',
                        routerLink: ['/reserve']
                    },
                    {
                        label: 'คิวรับบริการ',
                        icon: 'pi pi-users',
                        routerLink: ['/queue']
                    },
                    {
                        label: 'ข่าวสาร/ประชาสัมพันธ์',
                        icon: 'pi pi-fw pi-copy',
                        routerLink: ['/event']
                    },
                    {
                        label: 'การสนทนา',
                        icon: 'pi pi-comments',
                        routerLink: ['/chat']
                    },
                ]
            },
            {
                label: 'ตั้งค่า',
                style: 'font-size: 20px',
                items: [
                    {
                        label: 'ผู้ใช้งาน',
                        icon: 'pi pi-user',
                        routerLink: ['/staff']
                    },
                    {
                        label: 'แพทย์/บุคลากร',
                        icon: 'pi pi-users',
                        routerLink: ['/doctor']
                    },
                    {
                        label: 'ข้อมูลยา',
                        icon: 'pi pi-info-circle',
                        routerLink: ['/drug']
                    },
                ]
            },
        ];
    }
}
