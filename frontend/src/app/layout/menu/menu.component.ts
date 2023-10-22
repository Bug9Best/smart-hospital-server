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
                label: 'หน้าหลัก',
                style: 'font-size: 20px',
                items: [
                    {
                        label: 'นัดหมายการบริจาคเลือด',
                        icon: 'pi pi-fw pi-calendar-plus',
                        routerLink: ['/appointment']
                    },
                    {
                        label: 'ศูนย์บริจาคเลือดใกล้ฉัน',
                        icon: 'pi pi-fw pi-map-marker',
                        routerLink: ['/nearby']
                    },
                    {
                        label: 'ธนาคารเลือด',
                        icon: 'pi pi-fw pi-building',
                        routerLink: ['/blood-bank']
                    },
                    {
                        label: 'รางวัลจากการบริจาค',
                        icon: 'pi pi-fw pi-gift',
                        routerLink: ['/reward']
                    },
                    {
                        label: 'ข่าวสาร/ประชาสัมพันธ์',
                        icon: 'pi pi-fw pi-copy',
                        routerLink: ['/news']
                    },
                ]
            },
            {
                label: 'ข้อมูลส่วนตัว',
                style: 'font-size: 20px',
                items: [
                    {
                        label: 'ประวัติส่วนตัว',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/profile']
                    },
                    {
                        label: 'ประวัติการบริจาคเลือด',
                        icon: 'pi pi-fw pi-cog',
                        routerLink: ['/history']
                    },
                ]
            },
        ];
    }
}
