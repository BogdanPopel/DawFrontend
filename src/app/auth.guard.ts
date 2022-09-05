import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
  ) {
    console.log('AuthGuard');
  }

  // @ts-ignore
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let isAuth = false;
    const role = localStorage.getItem('Role');
    isAuth = role === 'Admin';
    if (!isAuth) {
      this.router.navigate(['login']);
    }
    return isAuth;
  }

  canActivateChild( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(next, state);
  }
}
