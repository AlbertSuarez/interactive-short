import { Component, OnInit } from '@angular/core';

import * as config from '../config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = config.title;
  subtitle = config.subtitle;
  question = config.question;
  playButton = config.playButton;

  constructor() { }

  ngOnInit() {
  }

}
