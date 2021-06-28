import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ResultsComponent} from "./results/results.component";
import {GraphsComponent} from "./graphs/graphs.component";
import {UsersComponent} from "./users/users.component";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DialogComponent} from "./components/dialog/dialog.component";
import { LayoutComponent } from './layout/layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { CampaignComponent } from './campaign/campaign.component';
import { ProcessCampaignComponent } from './campaign/process-campaign/process-campaign.component';
import { PerformanceComponent } from './performance/performance.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'results',
        component: ResultsComponent
      },
      {
        path: 'graphs',
        component: GraphsComponent
      },
      {
        path: 'main',
        component: UsersComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'campaign',
        component: CampaignComponent
      },
      {
        path: 'process-campaign',
        component: ProcessCampaignComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'performance',
        component: PerformanceComponent
      },
      {
        path: 'dialog',
        component: DialogComponent
      }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
