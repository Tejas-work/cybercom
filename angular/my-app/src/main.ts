import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {RegistrationModule } from './registration/registration.module';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  platformBrowserDynamic().bootstrapModule(RegistrationModule)
  .catch(err => console.error(err));