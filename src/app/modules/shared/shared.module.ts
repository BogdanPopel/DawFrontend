import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAddEditLocationComponent } from './dialog-add-edit-location/dialog-add-edit-location.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [DialogAddEditLocationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  entryComponents: [
    DialogAddEditLocationComponent
  ]
})
export class SharedModule { }
