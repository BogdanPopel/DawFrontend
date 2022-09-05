import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LocationsComponent} from './locations/locations.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
path: '',
redirectTo: 'locations',
    pathMatch: 'full'
},
  {
  path: 'locations',
component: LocationsComponent
},
  {
    path: 'location/:id',
  component: LocationsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
