import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular Material
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatChipsModule } from "@angular/material/chips";
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from "@angular/material/list";
import { MatStepperModule } from "@angular/material/stepper";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';

import { ResultsComponent } from './results/results.component';
import { GraphsComponent } from './graphs/graphs.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
// import { CardsComponent } from './profile/components/cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CampaignComponent } from './campaign/campaign.component';
import { DataTableComponent } from './campaign/components/data-table/data-table.component';
import { CardsContainerComponent } from './campaign/components/cards-container/cards-container.component';
import { CardsComponent } from './campaign/components/cards-container/cards/cards.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout.component';
import { SideBarComponent } from './layout/components/side-bar/side-bar.component';
import { TopBarComponent } from './layout/components/top-bar/top-bar.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { NotificationsComponent } from './layout/components/top-bar/notifications/notifications.component';
import { NewCardsComponent } from './layout/components/top-bar/notifications/new-cards/new-cards.component';
import { OldCardsComponent } from './layout/components/top-bar/notifications/old-cards/old-cards.component';
import { MessageAlertComponent } from './layout/components/top-bar/notifications/message-alert/message-alert.component';
import { ProcessCampaignComponent } from './campaign/process-campaign/process-campaign.component';
import { CalledComponent } from './campaign/components/campaign-pop-ups/called/called.component';
import { FinishComponent } from './campaign/components/campaign-pop-ups/finish/finish.component';
import {MatTabsModule} from "@angular/material/tabs";
import { PerformanceComponent } from './performance/performance.component';
import { PerformanceCardsComponent } from './performance/components/performance-cards/performance-cards.component';
import { PerformanceDataTableComponent } from './performance/components/performance-data-table/performance-data-table.component';


@NgModule({
  declarations: [
    ResultsComponent,
    GraphsComponent,
    UsersComponent,
    ProfileComponent,
    // CardsComponent,
    DashboardComponent,
    DialogComponent,
    LayoutComponent,
    DashboardLayoutComponent,
    SideBarComponent,
    TopBarComponent,
    FooterComponent,
    NotificationsComponent,
    NewCardsComponent,
    OldCardsComponent,
    MessageAlertComponent,
    ProfileComponent,
    CampaignComponent,
    DataTableComponent,
    CardsContainerComponent,
    CardsComponent,
    ProcessCampaignComponent,
    CalledComponent,
    FinishComponent,
    PerformanceComponent,
    PerformanceCardsComponent,
    PerformanceDataTableComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDatepickerModule,
        MatChipsModule,
        MatSliderModule,
        MatSidenavModule,
        MatToolbarModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatCardModule,
        ChartsModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatMenuModule,
        MatTooltipModule,
        MatSlideToggleModule,
        MatButtonToggleModule,
        MatListModule,
        MatStepperModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatBadgeModule,
        MatDialogModule,
        MatRippleModule,
        MatTabsModule
    ]
})
export class AdminModule { }
