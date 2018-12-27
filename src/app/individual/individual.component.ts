import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { InteractionService } from '../interaction.service';
import * as config from '../config';


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
      $('#video-player').attr('src', config.serverUrl + initId);
      const videoPlayer: HTMLVideoElement = <HTMLVideoElement> $('#video-player')[0];
      videoPlayer.load();

      // Set buttons text
      const initOptions = data[initId];
      for (let i = 0; i < initOptions.length; i++) {
        const buttonElement: HTMLAreaElement = <HTMLAreaElement> $('.container a').get(i);
        buttonElement.innerHTML = initOptions[i].value;
        buttonElement.addEventListener('click', (e: Event) => this.changeVideo(initOptions[i].key));
      }
    });
  }

  private changeVideo(key: string) {
    $('.container').hide();

    // Set video source
    $('#video-player').attr('src', config.serverUrl + key);
    const videoPlayer: HTMLVideoElement = <HTMLVideoElement> $('#video-player')[0];
    videoPlayer.load();

    return null;
  }

  private onFinishVideo() {
    $('.container').removeAttr('hidden');
  }

}
