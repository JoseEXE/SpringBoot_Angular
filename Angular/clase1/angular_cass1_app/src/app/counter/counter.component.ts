import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  //De hijo a padre//
  @Input() title: string = '';
  //

  //De Padre a hijo paso 1//
  @Output() counterEmit : EventEmitter<number> = new EventEmitter();


  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
    //this.counter = localStorage.getItem('counter') != undefined ? parseInt(localStorage.getItem('counter')!) : 0;
    console.log('Contador primera vez: '+this.counter);
  }

  SetCounter(): void{
    
    this.counter = this.counter + 1;
    sessionStorage.setItem('counter', this.counter.toString());
    //localStorage.setItem('counter', this.counter.toString());

    //De Padre a hijo paso 2 //
    this.counterEmit.emit(this.counter);
  }

}
