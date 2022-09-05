import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LocationsService} from "../../../services/locations.service";
import {Location} from "../../../interfaces/location";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {
  public id: number;
  private sub: any;
  public location: Location = {
    id: 0,
    name:'Bulevard',
    address: {
      streetNumber: "Unirii21",
      county: "Buzau",
      city: "Patarlagele"
    }
  }

  constructor(
    private route: ActivatedRoute,
    private locationsService: LocationsService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id; //(+) -> transforma string in numar
      console.log(this.id)
      if(this.id){
      this.getLocationDetails();
      }
    })
  }

  public getLocationDetails(): void{
    this.locationsService.getAdress(this.id).subscribe((result) =>{
      //console.log(result);
      this.location = result
      console.log(this.location);

    })
}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
