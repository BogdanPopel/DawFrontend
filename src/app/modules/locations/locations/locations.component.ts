import { Component, OnInit } from '@angular/core';
import {LocationsService} from "../../../services/locations.service";
import {Router} from "@angular/router";
import {Location} from "../../../interfaces/location";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogAddEditLocationComponent} from "../../shared/dialog-add-edit-location/dialog-add-edit-location.component";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  public locations: Location[];
  public displayedColumns: string[] = ['id', 'name', 'adress', 'Delete', 'Edit'];

  constructor(
    private locationService: LocationsService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getLocations();
  }

  public getLocations(): void{
    this.locationService.getAllLocations().subscribe( (result) => {
      this.locations = result;
    })
}
 public seeAdress(id) : void{
    // @ts-ignore
   this.router.navigate(['/Location', id]);
 }

 public addData(location?): void{

   const dialogConfig = new MatDialogConfig();
   const data ={
     location
   };

   dialogConfig.width = '550px';
   dialogConfig.height = '700px';
   dialogConfig.data = data;
   const dialogRef = this.dialog.open(DialogAddEditLocationComponent, dialogConfig);
   dialogRef.afterClosed().subscribe((result) => {
     if(result){
       this.getLocations();
     }
   })
    this.locationService.createLocation(location).subscribe(() =>
    this.getLocations())
 }

 public deleteLocation(location): void{
    this.locationService.deleteLocation(location).subscribe((result) => {
      this.locations = result;
    })
 }
 public editLocation(location):void{
    this.addData(location);
 }

}
