import { AfterViewChecked, Component, OnInit } from '@angular/core';

import { HighlightService } from '../../services/prismjs.service';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
})
export class InterpolationComponent implements OnInit, AfterViewChecked {
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) {}

  ngAfterViewChecked(): void {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  tscode: string = "currentCustomer = 'Maria';";
  htmlcode: string = '<h3>Current customer: {{ currentCustomer }}</h3>';

  currentCustomer = 'Maria';
}
