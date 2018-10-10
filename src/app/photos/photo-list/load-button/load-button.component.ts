import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

 @Input() hasMore = false;

  ngOnInit() {
  }

}
