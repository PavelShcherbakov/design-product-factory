import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-header',
  templateUrl: './text-header.component.html',
  styleUrls: ['./text-header.component.scss']
})
export class TextHeaderComponent implements OnInit {

  @Input() backgroundText: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
