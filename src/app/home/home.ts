import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  counter = 0
  homeMessage = signal("Hello World!")
  counterMessage = signal(this.counter);
  keyUpHandler(event: KeyboardEvent){
    console.log(`User pressed the ${event.key} key`)
  }
  incrementCounter(count: number){
    console.log("button clicked")
  }

}
