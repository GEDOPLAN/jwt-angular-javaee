import { DemoService } from './../../services/demo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    DemoService
  ]
})
export class HomeComponent implements OnInit {

  demoEntity: any;

  errorStatus: number;

  constructor(private demoService: DemoService) { }

  ngOnInit() {
  }

  ladeDaten() {
    this.demoService.getHello().subscribe(
      r => { this.errorStatus = null; this.demoEntity = r; },
      e => { this.errorStatus = e; this.demoEntity = null }
    )
  }

}
