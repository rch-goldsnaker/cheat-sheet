import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/prismjs.service';

@Component({
  selector: 'app-binding-property',
  templateUrl: './binding-property.component.html',
  styleUrls: ['./binding-property.component.scss'],
})
export class BindingPropertyComponent implements OnInit, AfterViewChecked {
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
  tscode: string = "itemImageUrl = 'https://picsum.photos/200/300';";
  htmlcode: string = '<img alt="item" [src]="itemImageUrl">';
  itemImageUrl = 'https://picsum.photos/200/300';
}
