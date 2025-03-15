import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: String = 'Hello !!!!!!!!!!!!!!!';
  users: String[] = ['Carlos','Juan','Pedro','Ana'];
  //users: String[] = [];

  visible: boolean = false;

 setVisible(): void{
  this.visible = this.visible ? false : true;
  console.log('Click para visualizar: '+ this.visible );
 }

}
