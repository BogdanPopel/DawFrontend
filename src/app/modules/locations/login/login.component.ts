import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    message: string;
    public subscription: Subscription;

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  this.subscription = this.data.currentMessage.subscribe(message => this.message = message);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public login():void{
    this.data.changeMessage('Hello from login');
    this.router.navigate([`/locations`])
  }


}
