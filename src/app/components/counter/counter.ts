import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  counterValue = signal(13);

  incrementCounter(){
    this.counterValue.update((val)=> val + 1);
  }
  decrementCounter(){
    this.counterValue.update((val)=> val-1);

  }
  resetCounter(){
    this.counterValue.set(0);
  }

}
