import { Component, OnInit } from '@angular/core';
import * as data from './states.json';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  states: State[] = [];

  products: any = (data as any).default;

  constructor() {}

  ngOnInit(): void {
    console.log(data);
  }
}

interface State {
  id: number;
  statename: string;
  iconsvg: string;
  weblink: string;
  applink: string;
}
