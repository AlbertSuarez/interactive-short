import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import * as config from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public constructor(private titleService: Title ) { }

  public setTitle() {
    this.titleService.setTitle(config.title + ' | ' + config.subtitle);
  }

  ngOnInit() {
    this.setTitle();
  }

}
