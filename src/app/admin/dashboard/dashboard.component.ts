import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label} from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //Grafico 1 Bars
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: [30, 40, 40, 30, 35, 28, 30], label: 'Deudas cargadas' },
    { data: [21, 20, 28, 18, 22, 19, 18], label: 'Deudas completadas' }
  ];
  public barchartColors: Array<any> = [
    { backgroundColor: '#2B2E4A' },
    { backgroundColor: '#CEC3EE' }
  ];

  //Grafico 3 Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Pagado', 'No pagado', 'Estado 5', 'Estado 4', 'Estado 3'];
  public pieChartData: SingleDataSet = [300, 500, 100, 100, 200];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public piechartColors: Array < any > = [{
   backgroundColor: ['#544E98', '#CEC3EE', '#716CAA', '#8284BF', '#A59ED3']
  }];

  campaigns: any[] = [
    {"nombre": "Campaña de captación de banco falabella"}, {"nombre": "Campaña de captación de banco falabella"},
    {"nombre": "Campaña de captación de banco falabella"} 
  ];
  performances: any[] = [
    {"balance":"100", "tendency":"up", "concept": "Deudas cargadas"}, {"balance":"$200", "tendency":"up", "concept": "Costo de campaña"},
    {"balance":"50", "tendency":"down", "concept": "Deudas atendidas"}, {"balance":"10%", "tendency":"down", "concept": "Cobrabilidad"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
