import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { filter, catchError, take, flatMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

import { AuthStateModel } from '../models/auth-state.model';
import { AuthTokenModel } from '../models/auth-tokens.model';
import { LoginModel } from '../models/login.model';
import { RefreshGrantModel } from '../models/refresh-grant.model';
import { writeError } from 'src/app/core/logger';

@Injectable()
export class AuthService {
    key = Symbol.for('auth-tokens');
    state$: Observable<AuthStateModel>;
    tokens$: Observable<AuthTokenModel>;
    loggedIn$: Observable<boolean>;

    private initalState: AuthStateModel = { tokens: undefined, authReady: false };
    private state: BehaviorSubject<AuthStateModel>;

    constructor(private httpClient: HttpClient) {
        this.state = new BehaviorSubject<AuthStateModel>(this.initalState);
        this.state$ = this.state.asObservable();

        this.tokens$ = this.state.pipe(filter((state: AuthStateModel) => state.authReady))
            .pipe(map((state: AuthStateModel) => state.tokens));
        this.loggedIn$ = this.tokens$.pipe(map((tokens) => !!tokens));
    }

    init(): Observable<AuthTokenModel> {
        return this.startupTokenRefresh();
    }

    login(user: LoginModel): Observable<any> {
        return this.getTokens(user, 'password');
    }

    logout(): void {
        this.updateState({ tokens: undefined });
        this.removeToken();
    }

    refreshTokens(): Observable<AuthTokenModel> {
        return this.state
            .pipe(take(1))
            .pipe(map((state) => state.tokens))
            .pipe(flatMap((tokens) => this.getTokens({ refresh_token: (<AuthTokenModel> tokens).refresh_token }, 'refresh_token')
                .pipe(catchError((error) => Observable.throw('Session Expired')))
            ));
    }

    tokens(): AuthTokenModel {
        return this.state.value.tokens;
    }

    retrieveTokens(): AuthTokenModel {
        const tokensString = localStorage.getItem(this.key.toString());
        const tokensModel = tokensString ? JSON.parse(tokensString) : null;
        return tokensModel;
    }

    private getTokens(data: RefreshGrantModel | LoginModel, grantType: string): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = { headers: headers };

        const sendData = {
            ...data,
            grant_type: grantType,
            scope: 'openid offline_access'
        };

        const params = Object.keys(sendData)
            .reduce((accum, key) => accum.set(key, sendData[key]), new HttpParams());
        return this.httpClient.post<AuthTokenModel>(`/connect/token`, params.toString(), options)
            .pipe(tap((tokens: AuthTokenModel) => {
                this.storeToken(tokens);
                this.updateState({ authReady: true, tokens });
            }))
            .pipe(catchError((error) => {
                writeError('AuthService.getTokens', error);
                throw error;
            }));
    }

    private storeToken(tokens: AuthTokenModel): void {
        const previousTokens = this.retrieveTokens();
        const storeTokens = {
            ...tokens
        };
        if (!tokens.refresh_token && previousTokens && previousTokens.refresh_token) {
            storeTokens.refresh_token = previousTokens.refresh_token;
        }
        localStorage.setItem(this.key.toString(), JSON.stringify(storeTokens));
    }

    private removeToken(): void {
        localStorage.removeItem(this.key.toString());
    }

    private updateState(newState: AuthStateModel): void {
        const previousState = this.state.getValue();
        this.state.next(Object.assign({}, previousState, newState));
    }

    private startupTokenRefresh(): Observable<AuthTokenModel> {
        return of(this.retrieveTokens())
            .pipe(flatMap((tokens: AuthTokenModel) => {
                if (!tokens) {
                    this.updateState({ authReady: true });
                    return Observable.throw('No token in Storage');
                }
                this.updateState({ tokens });
                this.updateState({ authReady: true });

                return this.refreshTokens();
            }))
            .pipe(catchError((error) => {
                this.logout();
                this.updateState({ authReady: true });
                return Observable.throw(error);
            }));
    }
}
