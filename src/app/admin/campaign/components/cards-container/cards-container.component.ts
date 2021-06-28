import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {

  cards: any[] = [
    {id: 1, name: 'FELIX VARGAS CHUMPITAZ', color: 'pending', state: 'Pendiente', monto: '1456.05', icon: 'mail', barridos: '8', stage: 'active' },
    {id: 2, name: 'ANDY JAVIER REYES', color: 'off', state: 'No contesto', monto: '1456.75', icon: 'phone', barridos: '8', stage: 'active' },
    {id: 3, name: 'VICTOR QUISPE CARRASCAL', color: 'suspended', state: 'Suspendido', monto: '1445.27', icon: 'chat', barridos: '8', stage: 'inactive' },
    {id: 4, name: 'CRISTIAN LAZO QUISPE', color: 'off', state: 'No contesto', monto: '1496.15', icon: 'phone', barridos: '8', stage: 'active' },
    {id: 5, name: 'FELIX VARGAS CHUMPITAZ', color: 'off', state: 'No contesto', monto: '1496.15', icon: 'chat', barridos: '8', stage: 'active' },
    {id: 6, name: 'VICTOR QUISPE CARRASCAL', color: 'off', state: 'No contesto', monto: '1445.27', icon: 'chat', barridos: '8', stage: 'active' },
    {id: 7, name: 'VICTOR QUISPE CARRASCAL', color: 'off', state: 'No contesto', monto: '1445.27', icon: 'chat', barridos: '8', stage: 'active' },
    {id: 8, name: 'VICTOR QUISPE CARRASCAL', color: 'off', state: 'No contesto', monto: '1445.27', icon: 'chat', barridos: '8', stage: 'active'},
  ]

  answer: boolean = false
  noAnswer: boolean = false
  activate: number = 0;

  getFilteredCards() {
    if(this.answer && this.noAnswer) {
      this.filteredCards = this.cards;
      } else if(this.answer) {
        this.filteredCards = this.cards.filter(doctor => doctor.state === 'Pendiente');
        } else if(this.noAnswer) {
          this.filteredCards = this.cards.filter(doctor => doctor.state === 'No contesto');
          } else {
            this.filteredCards = this.cards;
          }
  }

  active(id: number): void {
    this.activate = id;
  }

  filteredCards: any[] = [];

  constructor() { 
    this.filteredCards = this.cards;
  }

  ngOnInit(): void {
  }

}
