import { CounterService } from './shared/services/counter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';

  constructor(private counter: CounterService) {

  }

  addCount() {
    this.counter.incrementCounter();
  }
}
