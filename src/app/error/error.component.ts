import { Component, OnInit } from '@angular/core';

import * as config from '../config';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  error_title = config.error_title;
  error_subtitle = config.error_subtitle;
  error_button = config.error_button;

  constructor() { }

  ngOnInit() {
  }

}
