import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationRouteActivator implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const tokens = this.authService.retrieveTokens();
        const challenge = typeof tokens !== 'undefined';
        if (!challenge) {
            this.router.navigate(['/application', 'login'],
                {
                    queryParams: {
                        returnUrl: route.fragment
                    }
                });
        }
        return challenge;
    }
}
