import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class ConditionalModuleLoader implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        console.log('route', route.path);
        return route.data && route.data.preload ? load() : of(null);
    }
}
