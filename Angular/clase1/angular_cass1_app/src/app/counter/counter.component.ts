import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  ngOnInit(): void {
    //this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
    this.counter = localStorage.getItem('counter') != undefined ? parseInt(localStorage.getItem('counter')!) : 0;
  }

  SetCounter(): void{
    this.counter = this.counter + 1;
    //sessionStorage.setItem('counter', this.counter.toString());
    localStorage.setItem('counter', this.counter.toString());
  }

}
