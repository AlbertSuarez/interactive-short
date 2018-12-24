import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { InteractionService } from '../interaction.service';


@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
  providers: [InteractionService]
})
export class IndividualComponent implements OnInit {

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.start();
    $('#video-player').on('ended', this.onFinishVideo);
  }

  private start() {
    this.interactionService.getInteractionJson().subscribe((data) => console.log(data));
  }

  private onFinishVideo() {
    $('.container').removeAttr('hidden');
  }

}
