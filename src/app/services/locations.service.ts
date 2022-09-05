import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Location} from "../interfaces/location";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  public url = 'https://localhost:44341/api/Location';
  constructor(
    private http: HttpClient
  ) { }

  public getAllLocations(): Observable<Location[]>{
      return this.http.get<any>(this.url);
  }
  public getAdress(id: number | undefined): Observable<Location>{
     return this.http.get<any>(`${this.url}/byId/${id}`);
  }
  public createLocation(body: any): Observable<any>{

    return this.http.post<any>(`${this.url}/fromBody`, body);
  }

  public deleteLocation(location: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
        body: location
    };
    return this.http.delete<any>(this.url, httpOptions);
  }
}
