import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  //Despues de deshabilitar scc
  //providers: [provideRouter(routes), provideClientHydration()]    //D jaquino
  providers: [provideRouter(routes)]  //A jaquino
};
