import { Component, OnInit } from '@angular/core';

import * as config from '../config';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  errorTitle = config.errorTitle;
  errorSubtitle = config.errorSubtitle;
  errorButton = config.errorButton;

  constructor() { }

  ngOnInit() {
  }

}
