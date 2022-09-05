import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {LocationsService} from '../../../services/locations.service';

@Component({
  selector: 'app-dialog-add-edit-location',
  templateUrl: './dialog-add-edit-location.component.html',
  styleUrls: ['./dialog-add-edit-location.component.scss']
})
export class DialogAddEditLocationComponent implements OnInit {

  public title: string;
  public isEditable: boolean;
  public locationForm: FormGroup = new FormGroup({
      // fielduri form
    id: new FormControl(0),
    name: new FormControl(''),
    streetNumber: new FormControl(''),
    county: new FormControl(''),
    city: new FormControl('')

});

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<DialogAddEditLocationComponent>,
    private locationsService: LocationsService
  ) {
    console.log(data);
    if (this.data.location) {
      this.title = 'Edit Location';
      this.locationForm.patchValue(this.data.location);
      this.isEditable = true;
    } else {
      this.title = 'Add Location';
      this.isEditable = false;
    }
  }

  get id(): AbstractControl {
    return this.locationForm.get('id');
  }
  get name(): AbstractControl {
    return this.locationForm.get('name');
  }
  get streetNumber(): AbstractControl {
    return this.locationForm.get('streetNumber');
  }
  get county(): AbstractControl {
    return this.locationForm.get('county');
  }
  get city(): AbstractControl {
    return this.locationForm.get('city');
  }
  ngOnInit() {
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public save(): void {
    console.log(this.locationForm.value);
    this.locationsService.createLocation(this.locationForm.value).subscribe(() => {
      this.dialogRef.close();
    });
  }


}
