import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageAlertComponent } from '../message-alert/message-alert.component';

@Component({
  selector: 'app-new-cards',
  templateUrl: './new-cards.component.html',
  styleUrls: ['./new-cards.component.scss']
})
export class NewCardsComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn!: string;

  @Input() newNotification!: {id: number, content: string, icon: string, time: string, state: string, subMenu: string};

  private _selected!: boolean;
  get selected(): boolean {return this._selected}

  @Input() set selected(val : boolean) {
    this._selected = val;
    console.log('funciona');

    console.log(this.closeBtn);
  };

  @Output() selectNewNotificationEvent = new EventEmitter<number>();

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
