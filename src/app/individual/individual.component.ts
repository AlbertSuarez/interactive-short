import { Component, OnInit } from '@angular/core';

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
  }

  private start() {
    this.interactionService.getInteractionJson().subscribe((data) => console.log(data));
  }

}
