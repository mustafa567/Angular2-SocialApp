import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
//import { UserService } from '../../_services/index';

@Component({
    moduleId: module.id,
    selector: 'userheader',
    templateUrl: 'userheader.component.html',
    styleUrls: ['userheader.style.css']
})

export class UserHeaderComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    usermenu: boolean = false;

    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        // this.loadAllUsers();
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    // }

    // private loadAllUsers() {
    //     this.userService.getAll().subscribe(users => { this.users = users; });
    // }


    showhideUserMenu() {

        this.usermenu = !this.usermenu;
    }
}