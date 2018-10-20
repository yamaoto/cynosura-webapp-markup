import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((error) => {
    console.log('angular bootstrap error', error);
    const div = document.createElement('div');
    div.innerText = error.toString();
    div.className = 'angular-bootstrap-error';
    document.body.appendChild(div);
  });
