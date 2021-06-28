import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Rol {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  page: number = 1;
  pages: number = 1;
  elxpage: number = 6;
  createuser: boolean = false;
  checked: boolean = true;
  password: string = "";
  users: any[] = [
    {"rol":"Admin", "name":"Sandra Casteñeda Rosales"}, {"rol":"Admin", "name":"Sandra Casteñeda Rosales"}, 
    {"rol":"Admin", "name":"Sandra Casteñeda Rosales"}, {"rol":"Usuario", "name":"Rafael Santos Medrano"},
    {"rol":"Usuario", "name":"Rafael Santos Medrano"}, {"rol":"Usuario", "name":"Rafael Santos Medrano"},
    {"rol":"Usuario", "name":"Rafael Santos Medrano"}, {"rol":"Usuario", "name":"Rafael Santos Medrano"},
    {"rol":"Admin", "name":"Sandra Casteñeda Rosales"}, {"rol":"Admin", "name":"Sandra Casteñeda Rosales"}, 
    {"rol":"Admin", "name":"Sandra Casteñeda Rosales"}, {"rol":"Usuario", "name":"Rafael Santos Medrano"},
  ];
  usersp: any[] = [];
  rols: Rol[] = [
    {value: 'sa', viewValue: 'Super Administrador'},
    {value: 'a', viewValue: 'Administrador'},
    {value: 'u', viewValue: 'Usuario'}
  ];
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required]);
  surnameFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  passwFormControl = new FormControl('', [Validators.required]);

  constructor() { 
    this.pages = Math.ceil(this.users.length/this.elxpage);
    this.updateUsersp();
  }
  ngOnInit(): void {
  }
  updateUsersp(): void { this.usersp = this.users.slice((this.page-1)*this.elxpage,this.page*this.elxpage); }
  subirPagina(): void { if(this.page < this.pages) { this.page++; } this.updateUsersp(); }
  bajarPagina(): void { if(this.page > 1) { this.page--; } this.updateUsersp(); }
  onPress(): void { this.createuser = !this.createuser; }
  onCopy(): void {
    const selBox = document.createElement('textarea'); selBox.style.position = 'fixed';
    selBox.style.left = '0'; selBox.style.top = '0'; selBox.style.opacity = '0'; 
    selBox.value = this.password; document.body.appendChild(selBox); selBox.focus();
    selBox.select(); document.execCommand('copy'); document.body.removeChild(selBox);
  }
  onGenerate(): void {
    this.password = "";
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 8; i++ ) { this.password += characters.charAt(Math.floor(Math.random() *charactersLength)); }
  }
}
