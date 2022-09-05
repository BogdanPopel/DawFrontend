import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LocationsModule} from "./modules/locations/locations.module";
import {SharedModule} from "./modules/shared/shared.module";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpReqInterceptor} from "./http-requests.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LocationsModule,
    SharedModule,
    MatDialogModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpReqInterceptor, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
