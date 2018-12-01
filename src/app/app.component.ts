import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /* EDIT: Main parameters */
  title = 'Short title';
  subtitle = 'An interactive short film by Albert Suarez';
  question = 'How do you want to play?';
  individual_button = 'Individually';
  group_button = 'In group';

  public constructor(private titleService: Title ) { }

  public setTitle() {
    this.titleService.setTitle(this.title + ' | ' + this.subtitle);
  }

  ngOnInit() {
    this.setTitle();
  }

}
