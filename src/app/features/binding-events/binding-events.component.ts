import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/prismjs.service';

@Component({
  selector: 'app-binding-events',
  templateUrl: './binding-events.component.html',
  styleUrls: ['./binding-events.component.scss'],
})
export class BindingEventsComponent implements OnInit, AfterViewChecked {
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

  //click event

  tscode: string = `
  onSaveMessage: string = '';
  onSave() {
    this.onSaveMessage = 'Hi there!';
  }
  `;
  htmlcode: string = '<button (click)="onSave()">Save</button>';

  onSaveMessage: string = '';
  onSave() {
    this.onSaveMessage = 'Hi there!';
  }

  // scroll event

  tscode2: string = `
  onScrollMessage: number = 0;
  onScroll(event:Event){
    const element =event.target as HTMLElement;
    this.onScrollMessage = element.scrollTop
  }
  `;
  htmlcode2: string = `
  <div class="box" (scroll)="onScroll($event)">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sed, sit repudiandae autem, facere tenetur quaerat beatae omnis quidem veniam ipsa. Voluptates et, dolorem blanditiis magnam consectetur in laboriosam corporis.</p>
  </div>
  <p>{{onScrollMessage}}</p>
  `;

  onScrollMessage: number = 0;
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    this.onScrollMessage = element.scrollTop;
  }

  // keyUp event

  tscode3: string = `
  onKeyUpMessage: string = '';
  onKeyUp(event: Event) {
    const element = event.target as HTMLInputElement;
    this.onKeyUpMessage = element.value;
  }
  `;
  htmlcode3: string = `
  <div (scroll)="onScroll($event)">
    <input type="text" (keyup)="onKeyUp($event)">
  </div>
  <p>{{onKeyUpMessage}}</p>
  `;

  onKeyUpMessage: string = '';
  onKeyUp(event: Event) {
    const element = event.target as HTMLInputElement;
    this.onKeyUpMessage = element.value;
  }
}
