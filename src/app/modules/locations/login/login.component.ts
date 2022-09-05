import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {DataService} from '../../../services/data.service';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    message: string;
    public subscription: Subscription;

  public loginForm: FormGroup = new FormGroup({
    // fielduri form
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit() {
  this.subscription = this.data.currentMessage.subscribe(message => this.message = message);
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }
  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public login(): void {
    this.data.changeMessage('Hello from login');
    localStorage.setItem('Role', 'Admin');
    this.router.navigate([`/locations`]);
  }


}
