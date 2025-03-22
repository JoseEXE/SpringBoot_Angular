import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartAppComponent } from './components/cart-app.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartAppComponent, MatIconModule],
  templateUrl: './app.component.html',
  //lstyleUrl: './app.component.css'
})
export class AppComponent {
  title = '1-f-esc-app';
}
