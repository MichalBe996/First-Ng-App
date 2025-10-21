import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-random-generator',
  imports: [],
  templateUrl: './random-generator.html',
  styleUrl: './random-generator.scss'
})
export class RandomGenerator {
    generatorValue = signal(0);
    generateRandom(){
  
      this.generatorValue.set(Math.round(Math.random() * 1000))
    }
  
}
