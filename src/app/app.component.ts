import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    notify: any;
    displayPanel = false;

    displayClose = false;
    displayUpdate = false;
    constructor() {
        this.notify = [];
    }
    title = 'loginApp';

    showNotification() {
        this.displayPanel = true;
        const records = localStorage.getItem('existingStudent');
        if (records !== null) {
            this.notify = JSON.parse(records);
        }
    }
    closeButton() {
        this.displayPanel = false;
    }
    outsidePanel() {
        this.displayPanel = false;
    }
   
}

