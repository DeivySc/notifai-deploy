import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-performance-data-table',
  templateUrl: './performance-data-table.component.html',
  styleUrls: ['./performance-data-table.component.scss']
})
export class PerformanceDataTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'policy', 'start', 'end', 'state', 'cover', 'intensity', 'amount'];
  dataSource: MatTableDataSource<TableElement>;
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  @Input() showTable: boolean = false;

  buttons: any[] = [
    {title: 'Hoy'},
    {title: 'Ayer'},
    {title: 'Esta semana'},
    {title: 'Hace 2 semanas'},
    {title: 'Hace 1 mes'},
  ]

  // displayedColumns: string[] = ['id', 'name', 'policy', 'start', 'end', 'state', 'cover', 'intensity', 'amount'];
  // dataSource = MatTableDataSource<TableElement>;

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
   }

  // ngOnInit(): void {
  //   this.paginator._intl.itemsPerPageLabel = 'Filas por página';
  //   // this.dataSource.paginator = this.paginator;
  // }
  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Filas por página';
    // this.cdr.detectChanges(); 
    this.dataSource.paginator = this.paginator;
    // setTimeout(() => this.dataSource.paginator = this.paginator);
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

export interface TableElement {
  id: number;
  name: string;
  policy: string;
  start: string;
  end: string;
  cover: string;
  state: string;
  intensity: number;
  amount: string;
}

const ELEMENT_DATA: TableElement[] = [
  {id: 1, name: 'Mi campaña', policy: 'Política de recupeación 01', start: '2021/02/20 13:00', end: '2021/02/20 13:00', state: 'Pendiente', cover: '70%', intensity: 8, amount: '8500/10000'},
  {id: 2, name: 'Mi campaña', policy: 'Política de recupeación 01', start: '2021/02/20 13:00', end: '2021/02/20 13:00', state: 'Pendiente', cover: '70%', intensity: 8, amount: '8500/10000'},
  {id: 3, name: 'Mi campaña', policy: 'Política de recupeación 01', start: '2021/02/20 13:00', end: '2021/02/20 13:00', state: 'Pendiente', cover: '70%', intensity: 8, amount: '8500/10000'},
  {id: 4, name: 'Mi campaña', policy: 'Política de recupeación 01', start: '2021/02/20 13:00', end: '2021/02/20 13:00', state: 'Pendiente', cover: '70%', intensity: 8, amount: '8500/10000'},
  {id: 5, name: 'Mi campaña', policy: 'Política de recupeación 01', start: '2021/02/20 13:00', end: '2021/02/20 13:00', state: 'Pendiente', cover: '70%', intensity: 8, amount: '8500/10000'},
  {id: 6, name: 'Mi campaña', policy: 'Política de recupeación 01', start: '2021/02/20 13:00', end: '2021/02/20 13:00', state: 'Pendiente', cover: '70%', intensity: 8, amount: '8500/10000'},
  {id: 7, name: 'Mi campaña', policy: 'Política de recupeación 01', start: '2021/02/20 13:00', end: '2021/02/20 13:00', state: 'Pendiente', cover: '70%', intensity: 8, amount: '8500/10000'},
  {id: 8, name: 'Mi campaña', policy: 'Política de recupeación 01', start: '2021/02/20 13:00', end: '2021/02/20 13:00', state: 'Pendiente', cover: '70%', intensity: 8, amount: '8500/10000'},
  {id: 9, name: 'Mi campaña', policy: 'Política de recupeación 01', start: '2021/02/20 13:00', end: '2021/02/20 13:00', state: 'Pendiente', cover: '70%', intensity: 8, amount: '8500/10000'},
  {id: 10, name: 'Mi campaña', policy: 'Política de recupeación 01', start: '2021/02/20 13:00', end: '2021/02/20 13:00', state: 'Pendiente', cover: '70%', intensity: 8, amount: '8500/10000'},
];
