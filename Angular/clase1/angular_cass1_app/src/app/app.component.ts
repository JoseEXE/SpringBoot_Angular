import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title: String = 'Hello !!!!!!!!!!!!!!!';
  users: String[] = ['Carlos','Juan','Pedro','Ana'];
  //users: String[] = [];
  subTitle: string = 'Contador con estado de session - subTitle: ';
  
  //De Padre a Hijo //
  contador: number = 0;


  visible: boolean = false;

 setVisible(): void{
  this.visible = this.visible ? false : true;
  console.log('Click para visualizar: '+ this.visible );
 }

 setCounterX(counter: number): void{
  this.contador = counter;
 }

 //De Padre a hijo paso 3//
 ngOnInit(): void {
  this.contador = parseInt(sessionStorage.getItem('counter')!) || 0;
}

}
