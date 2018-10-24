import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(tap(
                    (event: HttpEvent<any>) => {

                    })
            ).pipe(catchError((error: any) => {
                if (error instanceof HttpErrorResponse) {
                    throw error.error;
                }
                throw error;
            }));
    }
}
