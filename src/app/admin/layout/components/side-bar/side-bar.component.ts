import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() menuItems!: Array<{ icon: String, name: String, route: string }>;

  currentRoute: string = '';

  constructor(public router: Router) {
    router.events.subscribe((val: any) => {
      this.currentRoute = val.url;
    })
   }

  ngOnInit(): void {
  }

}
