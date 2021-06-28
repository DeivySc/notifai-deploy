import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageAlertComponent } from '../message-alert/message-alert.component';

@Component({
  selector: 'app-old-cards',
  templateUrl: './old-cards.component.html',
  styleUrls: ['./old-cards.component.scss']
})
export class OldCardsComponent implements OnInit {

  @Input() oldNotification!: {id: number, content: string, icon: string, time: string, state: string, subMenu: string};
  
  @Input() selected: boolean = false;

  @Output() selectOldNotificationEvent = new EventEmitter<number>();

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.openFromComponent(MessageAlertComponent, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: ['class-snackbar']
    });
  }

  ngOnInit(): void {
  }

}
