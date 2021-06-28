import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  menuItems = [
    { icon: 'assets/img/sound.svg', name: 'CAMPAÑA', route: '/admin/dashboard/campaign' },
    { icon: 'assets/img/search.svg', name: 'RESULTADOS', route: '/admin/dashboard/results' },
    { icon: 'assets/img/time.svg', name: 'PERFORMANCE', route: '/admin/dashboard/performance' },
    { icon: 'assets/img/graph2.svg', name: 'GRÁFICOS', route: '/admin/dashboard/graphs' },
    { icon: 'assets/img/user.svg', name: 'ADMINISTRADOR', route: '/admin/dashboard/main' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
