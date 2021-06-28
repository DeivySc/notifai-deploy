import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CalledComponent } from '../campaign-pop-ups/called/called.component';

export interface TableElement {
  hour: string;
  date: string;
  time: string;
  state: string;
  play: number;
}

const ELEMENT_DATA: TableElement[] = [
  {date: '2021-02-11', hour: '12:57', time: '00:00:13', state: 'Pendiente', play: 1},
  {date: '2021-02-11', hour: '12:58', time: '00:00:59', state: 'No contesto', play: 2},
  {date: '2021-02-11', hour: '12:57', time: '00:00:59', state: 'Contesto', play: 3},
  {date: '2021-02-11', hour: '12:57', time: '00:00:13', state: 'Pendiente', play: 4},
  {date: '2021-02-11', hour: '12:58', time: '00:00:59', state: 'No contesto', play: 5},
  {date: '2021-02-11', hour: '12:58', time: '00:00:13', state: 'Contesto', play: 6},
  {date: '2021-02-11', hour: '12:57', time: '00:00:13', state: 'Pendiente', play: 7},
  {date: '2021-02-11', hour: '12:58', time: '00:00:59', state: 'No contesto', play: 8},
  {date: '2021-02-11', hour: '12:57', time: '00:00:13', state: 'Contesto', play: 9},
  {date: '2021-02-11', hour: '12:58', time: '00:00:59', state: 'Pendiente', play: 0},
];

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  playTable: boolean = true;

  changeStateTable() {
    this.playTable = !this.playTable;
  }

  displayedColumns: string[] = ['select', 'date', 'hour', 'time', 'state', 'play', 'download'];
  dataSource = new MatTableDataSource<TableElement>(ELEMENT_DATA);
  selection = new SelectionModel<TableElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: TableElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.date + 1}`;
  }

  constructor(public _dialogCalled: MatDialog) {}
  
  openDialogCalled() {
    const dialogRef = this._dialogCalled.open(CalledComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
