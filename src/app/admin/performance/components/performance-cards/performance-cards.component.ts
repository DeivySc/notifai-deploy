import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-performance-cards',
  templateUrl: './performance-cards.component.html',
  styleUrls: ['./performance-cards.component.scss']
})
export class PerformanceCardsComponent implements OnInit {

  @Input() entity!: {id: number, state: string, state2: string};

  @Input() selected: boolean = false;
  @Output() selectCardEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

}
