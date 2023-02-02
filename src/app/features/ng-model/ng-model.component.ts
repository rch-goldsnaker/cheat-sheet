import { Component } from '@angular/core';
import { HighlightService } from 'src/app/services/prismjs.service';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss'],
})
export class NgModelComponent {
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
  tscode2: string = `
  ...
  import {FormsModule} from '@angular/forms'
  ...

  imports: [
    ...
    FormsModule
    ...
  ],
  `;
  tscode: string = `
  textModel = '';
  `;
  htmlcode: string = `
  <div>
    <input type="text" [(ngModel)]="textModel">
  </div>
  <p>{{textModel}}</p>
  `;

  textModel = '';
}
