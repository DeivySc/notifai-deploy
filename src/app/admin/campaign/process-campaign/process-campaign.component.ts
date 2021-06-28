import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FinishComponent } from '../components/campaign-pop-ups/finish/finish.component';

@Component({
  selector: 'app-process-campaign',
  templateUrl: './process-campaign.component.html',
  styleUrls: ['./process-campaign.component.scss']
})
export class ProcessCampaignComponent implements OnInit {

  play: boolean = true;

  changeState() {
    this.play = !this.play;
  }

  constructor(public _dialogFinish: MatDialog) {}

  openDialogFinish() {
    const dialogRef = this._dialogFinish.open(FinishComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
