import { CounterService } from './../../shared/services/counter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private counter: CounterService
  ) { }

  ngOnInit() {
    this.contact = this.route.snapshot.paramMap.get('to')
  }

  goAbout() {
    this.router.navigate(['/about'])
  }

  revealCounter(): number {
    return this.counter.getCounter();
  }

}
