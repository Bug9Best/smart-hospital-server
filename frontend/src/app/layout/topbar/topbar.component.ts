import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "../service/layout.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
})
export class AppTopBarComponent {
    currentUser = JSON.parse(localStorage.getItem('user')!);

    items!: MenuItem[];
    menuitems: MenuItem[] = [
        {
            items: [
                {
                    label: 'ออกจากระบบ',
                    icon: 'pi pi-sign-out',
                    command: () => {
                        localStorage.removeItem('user');
                        this.router.navigate(['/signin']);
                    }
                },
            ]
        }
    ];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService, private router: Router) { }
}
