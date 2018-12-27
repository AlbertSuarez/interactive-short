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
    this.interactionService.getInteractionJson().subscribe((data) => {
      // Set video source
      const initId = data.init;
      $('#video-player').attr('src', 'http://localhost:8080/video?id=' + initId);
      const videoPlayer: HTMLVideoElement = <HTMLVideoElement> $('#video-player')[0];
      videoPlayer.load();

      // Set buttons text
      const initOptions = data[initId];
      for (let i = 0; i < initOptions.length; i++) {
        $('.container a').get(i).innerHTML = initOptions[i].value;
      }
    });
  }

  private onFinishVideo() {
    $('.container').removeAttr('hidden');
  }

}
