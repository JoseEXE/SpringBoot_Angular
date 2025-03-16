import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { InvoiceComponent } from './app/components/invoice/invoice.component';

// const bootstrap = () => bootstrapApplication(InvoiceComponent, config);  3-3 SEGUNDA FORMA
const bootstrap = () => bootstrapApplication(AppComponent, config);
export default bootstrap;
