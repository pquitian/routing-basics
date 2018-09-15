import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: number = 0;

  constructor() { }

  incrementCounter() {
    this.counter++;
  }

  getCounter(): number {
    return this.counter;
  }
}
