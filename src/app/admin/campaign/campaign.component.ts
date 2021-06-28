import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  animal!: string;
  name!: string;
  selected: boolean = false;

  buttons: any[] = [
    {title: 'Hoy'},
    {title: 'Ayer'},
    {title: 'Esta semana'},
    {title: 'Hace 2 semanas'},
    {title: 'Hace 1 mes'},
  ]

  campaigns: any[] = [
    {state: 'on'},
    {state: 'on'},
    {state: 'on'},
    {state: 'off'},
    {state: 'off'},
    {state: 'on'},
    {state: 'on'},
    {state: 'on'},
    {state: 'off'},
    {state: 'off'},
    {state: 'off'},
    {state: 'on'},

  ]
  filteredStateCampaign: any[] = []

  constructor(public _dialogCampaign: MatDialog) {
    this.filteredStateCampaign = this.campaigns
   }

  openDialogCampaign() {
    const dialogRef = this._dialogCampaign.open(DialogComponent, {
      width: '1160px',
      height: '600px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  showAvailablesOnly(event: any): void {
    if (event.checked) {
      this.filteredStateCampaign = this.campaigns.filter(campaign => campaign.state === 'on');
    } else {
      this.filteredStateCampaign = this.campaigns;
    }
  }

  ngOnInit(): void {
  }

}
