import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatStepper} from "@angular/material/stepper";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CampaignComponent, DialogData} from "../../campaign/campaign.component";

interface Politic {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  hidden: boolean = true;

  multiple: boolean = true;

  @ViewChild('dropZone') dropZone: any;

  files: any = [];

  uploadFileForm = new FormGroup({
    fileName:new FormControl(null)
  })

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  @ViewChild('stepper') stepper!: MatStepper;

  isActivate1 = true
  isActivate2 = false
  isActivate3 = false

  activateButton1(){
    this.isActivate1 = true;
    this.isActivate2 = false;
    this.isActivate3 = false;
  }

  activateButton2(){
    if (this.firstFormGroup.valid){
      this.isActivate2 = true;
      this.isActivate1 = false;
      this.isActivate3 = false;
    }
  }

  activateButton3(){
    if (this.secondFormGroup.valid){
      this.isActivate3 = true;
      this.isActivate2 = false;
      this.isActivate1 = false;
    }
  }

  politic: Politic[] = [
    {value: '1', viewValue: 'Política xxxxxxxxxx1 (Tipo de canal)'},
    {value: '2', viewValue: 'Política xxxxxxxxxx2 (Tipo de canal)'},
    {value: '3', viewValue: 'Política xxxxxxxxxx3 (Tipo de canal)'}
  ];

  closeText() {
    this.hidden = false;
  }

  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<CampaignComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  selectedHours = [{ startTime: '', endTime: '' }];

  hours: any[] = [
    { value: '12:30', viewValue: '12:30pm' },
    { value: '13:30', viewValue: '1:30pm' },
    { value: '14:40', viewValue: '2:30pm' },
  ];

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    })
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  addSelectedHour():void {
    this.selectedHours.push({ startTime: '', endTime: '' });
  }

  removeSelectedHour():void {
    this.selectedHours.splice(0, 1);
  }

  move(index: number){
    this.stepper.selectedIndex = index;
  }

  onFileDropped($event: any) {
    if (this.multiple) {
      this.files.push(...$event);
      console.log(this.files);
    } else {
      this.files = $event;
      console.log(this.files);
    }
  }

  upload(file:any): void {
    const newFiles = Array.from(file.target.files);

    if (this.multiple) {
      this.files.push(...newFiles);
      console.log(this.files);
    } else {
      this.files = newFiles;
      console.log(this.files);
    }
  }

  removeFile(index: any): void {
    this.files.splice(index, 1);
  }

}
