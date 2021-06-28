import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() card!: {
    id: number,
    name: string,
    color: string,
    state: string,
    monto: string,
    icon: string,
    barridos: string,
    stage: string,
  }

  @Input() activate: boolean = false;
  @Output() selectCardPerformance = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

}
