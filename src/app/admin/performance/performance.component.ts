import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  showTable: boolean = false;
  selectedCardId: number = 0;

  active: boolean = true;

  buttons: any[] = [
    {title: 'Hoy'},
    {title: 'Ayer'},
    {title: 'Esta semana'},
    {title: 'Hace 2 semanas'},
    {title: 'Hace 1 mes'},
  ]

  entities: any[] = [
    {id: 1, state: 'on', state2: 'off'},
    {id: 2, state: 'off', state2: 'off'},
    {id: 3, state: 'on', state2: 'off'},
    {id: 4, state: 'on', state2: 'on'},
    {id: 5, state: 'off', state2: 'off'}
  ]

  getShowElements(id: number): void {
    this.selectedCardId = id;
    this.showTable = true;
    this.active = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
