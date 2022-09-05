import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LocationsRoutingModule} from "./locations-routing.module";
import { LocationsComponent } from './locations/locations.component';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import { LocationComponent } from './location/location.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {RowHoverDirective} from "../../row-hover.directive";
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import {MarksPipe} from "../../marks.pipe";



@NgModule({
  declarations: [
    LocationsComponent,
    LocationComponent,
    RowHoverDirective,
    ChildComponent,
    LoginComponent,
    MarksPipe
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  exports:[
  RowHoverDirective,

]
})
export class LocationsModule { }
